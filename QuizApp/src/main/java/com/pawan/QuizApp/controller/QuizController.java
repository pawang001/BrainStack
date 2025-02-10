package com.pawan.QuizApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pawan.QuizApp.entity.Questions;
import com.pawan.QuizApp.entity.Response;
import com.pawan.QuizApp.service.QuizService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("quiz")
public class QuizController {
	
	@Autowired
	QuizService quizService;
	
	// http://localhost:8081/quiz/create?category=Java&numQ=5&title=JQuiz
	@PostMapping("create")
	public ResponseEntity<String> createQuiz(@RequestParam String category,
			@RequestParam int numQ, @RequestParam String title) {
		return quizService.createQuiz(category, numQ, title);
	}
	
	// http://localhost:8081/quiz/getQuiz?category=Java&numQ=5
	@GetMapping("getQuiz")
	public ResponseEntity<List<Questions>> getQuizQuestions(@RequestParam String category,
			@RequestParam int numQ){
		return ResponseEntity.ok(quizService.getQuizQuestions(category, numQ));
	}
	
	// http://localhost:8081/quiz/submit/1
	@PostMapping("submit/{id}")
	public ResponseEntity<Integer> submitQuiz (@PathVariable Integer id,
			@RequestBody List<Response> responses) {
		return quizService.calculateResult(id, responses);
	}
}
