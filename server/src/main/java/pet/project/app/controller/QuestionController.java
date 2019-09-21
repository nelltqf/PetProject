package pet.project.app.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pet.project.app.domain.Question;
import pet.project.app.manager.QuestionManager;

import java.util.List;

@RestController
public class QuestionController {

    private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);

    private final QuestionManager questionManager;

    @Autowired
    public QuestionController(QuestionManager questionManager) {
        this.questionManager = questionManager;
    }

    @GetMapping(path = "/categories")
    public List<String> getCategories() {
        return questionManager.getCategories();
    }

    @GetMapping(path = "/questions/{categoryId}")
    public List<Question> getQuestions(@PathVariable(value = "categoryId") String categoryId) {
        return questionManager.getQuestionsByCategory(categoryId);
    }

    @PostMapping(path = "/questions/add")
    public Question addQuestion(@RequestBody Question question) {
        questionManager.createQuestion(question);
        return question;
    }

    @PutMapping(path = "/questions/edit")
    public Question editQuestion(@RequestBody Question question) {
        questionManager.updateQuestion(question);
        return question;
    }

    @DeleteMapping(path = "/questions/delete")
    public Question deleteQuestion(@RequestBody Question question) {
        questionManager.deleteQuestion(question);
        return question;
    }
}
