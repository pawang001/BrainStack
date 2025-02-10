package com.pawan.QuizApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pawan.QuizApp.entity.Questions;
import com.pawan.QuizApp.service.QuestionService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("question")
public class QuestionController {

	@Autowired
	QuestionService questionService;

	// http://localhost:8081/question/allQuestions
	@GetMapping("allQuestions")
	public ResponseEntity<List<Questions>> getAllQuestions() {
		return questionService.getAllQuestions();
	}

	// http://localhost:8081/question/category/category
	@GetMapping("category/{category}")
	public ResponseEntity<List<Questions>> getAllQuestionsByCategory(@PathVariable String category) {
		return questionService.getAllQuestionsByCategory(category);
	}

	// http://localhost:8081/question/add
	@PostMapping("add")
	public ResponseEntity<String> addQuestion(@RequestBody List<Questions> question) {
		return questionService.addQuestion(question);
	}
	
	// http://localhost:8081/question/delete/id
	@DeleteMapping("delete/{id}")
	public ResponseEntity<String> deleteQuestion(@PathVariable Integer id) {
	    return questionService.deleteQuestion(id);
	}

}
