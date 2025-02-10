package com.pawan.QuizApp.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pawan.QuizApp.entity.Quiz;

@Repository
public interface QuizDAO extends JpaRepository<Quiz, Integer>{

}
