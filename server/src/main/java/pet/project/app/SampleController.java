package pet.project.app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pet.project.app.domain.QuestionItem;

import java.util.List;

@RestController
public class SampleController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SampleController.class);

    private final QuestionManager questionManager;

    @Autowired
    public SampleController(QuestionManager questionManager) {
        this.questionManager = questionManager;
    }

    @GetMapping(path = "/categories")
    public List<String> getCategories() {
        return questionManager.getCategories();
    }

    @GetMapping(path = "/questions/{categoryId}")
    public List<QuestionItem> getQuestions(@PathVariable(value = "categoryId") String categoryId) {
        return questionManager.getQuestionsByCategory(categoryId);
    }

    @PostMapping(path = "/questions/add")
    public QuestionItem addQuestion(@RequestBody QuestionItem questionItem) {
        questionManager.createQuestion(questionItem);
        return questionItem;
    }

    @PutMapping(path = "/questions/edit")
    public QuestionItem editQuestion(@RequestBody QuestionItem questionItem) {
        questionManager.updateQuestion(questionItem);
        return questionItem;
    }

    @DeleteMapping(path = "/questions/delete")
    public QuestionItem deleteQuestion(@RequestBody QuestionItem questionItem) {
        questionManager.deleteQuestion(questionItem);
        return questionItem;
    }
}
