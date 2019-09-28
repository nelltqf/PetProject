package pet.project.app.manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pet.project.app.domain.Category;
import pet.project.app.domain.Question;
import pet.project.app.dto.CategoryDto;
import pet.project.app.dto.QuestionDto;
import pet.project.app.repository.CategoryRepository;
import pet.project.app.repository.QuestionRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class Manager {

    private final QuestionRepository questionRepository;

    private final CategoryRepository categoryRepository;

    @Autowired
    public Manager(QuestionRepository questionRepository, CategoryRepository categoryRepository) {
        this.questionRepository = questionRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<CategoryDto> getCategories() {
        Iterable<Category> iterable = categoryRepository.findAll();
        List<CategoryDto> result = new ArrayList<>();
        iterable.forEach(e -> {
            result.add(Transformer.categoryToDto(e));
        });
        return result;
    }

    public List<QuestionDto> getQuestionsByCategory(Integer categoryId) {
        Category category = categoryRepository
                .findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException(
                        String.format("Category with id = %s doesn't exist", categoryId)));
        return questionRepository.findByCategory(category)
                .stream()
                .map(Transformer::questionToDto)
                .collect(Collectors.toList());
    }

    public QuestionDto createQuestion(QuestionDto questionDto) {
        Question question = questionRepository.save(Transformer.questionToDomain(questionDto, categoryRepository));
        return Transformer.questionToDto(question);
    }

    public void updateQuestion(QuestionDto questionDto) {
        // TODO
    }

    public void deleteQuestion(int id) {
        questionRepository.deleteById(id);
    }

    public CategoryDto createCategory(CategoryDto categoryDto) {
        Category category = categoryRepository.save(Transformer.categoryToDomain(categoryDto));
        return Transformer.categoryToDto(category);
    }

    public void updateCategory(CategoryDto categoryDto) {
        // TODO
    }

    public void deleteCategory(Integer categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
