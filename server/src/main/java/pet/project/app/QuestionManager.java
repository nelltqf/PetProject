package pet.project.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pet.project.app.domain.Category;
import pet.project.app.domain.QuestionItem;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class QuestionManager {

    private final QuestionRepository questionRepository;

    @Autowired
    public QuestionManager(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }


    public List<String> getCategories() {
        // TODO store in DB
        return Stream.of(Category.values()).map(Category::name).collect(Collectors.toList());
    }

    public List<QuestionItem> getQuestionsByCategory(String categoryId) {
        // TODO stub
        return questionRepository.findByCategory(Category.values()[Integer.parseInt(categoryId)]);
    }

    public void createQuestion(QuestionItem questionItem) {
        questionRepository.save(questionItem);
    }

    public void updateQuestion(QuestionItem questionItem) {
        // TODO
    }

    public void deleteQuestion(QuestionItem questionItem) {
        questionRepository.delete(questionItem);
    }
}
