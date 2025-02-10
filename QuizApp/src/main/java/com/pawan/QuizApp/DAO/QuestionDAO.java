package com.pawan.QuizApp.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pawan.QuizApp.entity.Questions;

@Repository
public interface QuestionDAO extends JpaRepository<Questions, Integer>{

	List<Questions> findByCategory(String category);

	@Query(value = "SELECT * FROM question q "
			+ "WHERE q.category= :category ORDER BY RAND() LIMIT :numQ",
			nativeQuery = true)
	List<Questions> findRandomQuestionsByCategory(@Param("category") String category, 
			@Param("numQ") int numQ);

}
