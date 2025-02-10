package com.pawan.QuizApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.pawan.QuizApp.DAO.QuestionDAO;
import com.pawan.QuizApp.DAO.QuizDAO;
import com.pawan.QuizApp.entity.Questions;
import com.pawan.QuizApp.entity.Quiz;
import com.pawan.QuizApp.entity.Response;

@Service
public class QuizService {
	
	@Autowired
	QuizDAO quizDAO;
	
	@Autowired
	QuestionDAO questionDAO;

	public ResponseEntity<String> createQuiz(String category,
			int numQ, String title) {
		List<Questions> questions = 
				questionDAO.findRandomQuestionsByCategory(category, numQ);
		
		Quiz quiz = new Quiz();
		quiz.setTitle(title);
		quiz.setQuestions(questions);
		quizDAO.save(quiz);
		
		return new ResponseEntity<>("Success", HttpStatus.CREATED);
	}

	public List<Questions> getQuizQuestions(String category, int numQ) {
		return questionDAO.findRandomQuestionsByCategory(category, numQ);
	}

	public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
		Quiz quiz = quizDAO.findById(id).get();
		List<Questions> questions = quiz.getQuestions();
		int right = 0;
		int i = 0;
		for(Response response : responses) {
			if(response.getResponse().equals(questions.get(i).getRightAnswer()))
				right++;
			
			i++;
		}
		return new ResponseEntity<>(right, HttpStatus.OK);
	}

}
