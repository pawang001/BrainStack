package com.pawan.QuizApp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.pawan.QuizApp.DAO.QuestionDAO;
import com.pawan.QuizApp.entity.Questions;

@Service
public class QuestionService {
	
	@Autowired
	QuestionDAO questionDAO;

	public ResponseEntity<List<Questions>> getAllQuestions() {
		try {
			return new ResponseEntity<>(questionDAO.findAll(), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<List<Questions>> getAllQuestionsByCategory(String category) {
		try {
			return new ResponseEntity<>(questionDAO.findByCategory(category), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
	}

	public ResponseEntity<String> addQuestion(List<Questions> questions) {
		try {
			questionDAO.saveAll(questions);
			return new ResponseEntity<>("Success", HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>("Failure", HttpStatus.BAD_REQUEST);
	}
	
	public ResponseEntity<String> deleteQuestion(Integer id) {
        if (questionDAO.existsById(id)) {
            questionDAO.deleteById(id);
            return ResponseEntity.ok("Question deleted successfully!");
        } else {
            return ResponseEntity.status(404).body("Question not found!");
        }
    }
}
