package com.quizapp.controller;

import com.quizapp.model.Question;
import com.quizapp.repository.QuestionRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class QuizController {
    private final QuestionRepository repo;
    public QuizController(QuestionRepository repo) {
        this.repo = repo;
    }
    @GetMapping("/questions")
    public List<Question> getQuestions() {
        return repo.findAll();
    }
}