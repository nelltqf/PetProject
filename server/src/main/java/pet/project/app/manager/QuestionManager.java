package pet.project.app.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pet.project.app.domain.Category;
import pet.project.app.domain.Question;
import pet.project.app.repository.QuestionRepository;

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

    public List<Question> getQuestionsByCategory(String categoryId) {
        // TODO stub
        return questionRepository.findByCategory(Category.values()[Integer.parseInt(categoryId)]);
    }

    public void createQuestion(Question question) {
        questionRepository.save(question);
    }

    public void updateQuestion(Question question) {
        // TODO
    }

    public void deleteQuestion(Question question) {
        questionRepository.delete(question);
    }
}
