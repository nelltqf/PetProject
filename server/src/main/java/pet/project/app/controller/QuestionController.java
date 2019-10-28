package pet.project.app.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pet.project.app.dto.QuestionDto;
import pet.project.app.manager.Manager;

import java.util.List;

// TODO remove asterix
@RestController
@RequestMapping("/questions")
public class QuestionController {

    private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);

    private final Manager manager;

    @Autowired
    public QuestionController(Manager manager) {
        this.manager = manager;
    }

    @GetMapping(path = "/{categoryId}")
    public List<QuestionDto> getQuestionsByCategory(@PathVariable(value = "categoryId") Integer categoryId) {
        return manager.getQuestionsByCategory(categoryId);
    }

    @PostMapping(path = "/add")
    public QuestionDto addQuestion(@RequestBody QuestionDto question) {
        return manager.createQuestion(question);
    }

    @PutMapping(path = "/edit")
    public QuestionDto editQuestion(@RequestBody QuestionDto question) {
        manager.updateQuestion(question);
        return question;
    }

    @DeleteMapping(path = "/delete/{questionId}")
    public void deleteQuestion(@PathVariable(value = "questionId") Integer questionId) {
        manager.deleteQuestion(questionId);
    }
}
