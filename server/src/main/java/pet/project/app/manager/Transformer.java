package pet.project.app.manager;

import pet.project.app.domain.Category;
import pet.project.app.domain.Difficulty;
import pet.project.app.domain.Question;
import pet.project.app.dto.CategoryDto;
import pet.project.app.dto.QuestionDto;
import pet.project.app.repository.CategoryRepository;

public class Transformer {

    public static CategoryDto categoryToDto(Category category) {
        CategoryDto categoryDto = new CategoryDto();
        categoryDto.setId(category.getId());
        categoryDto.setName(category.getName());
        return categoryDto;
    }

    public static QuestionDto questionToDto(Question question) {
        QuestionDto questionDto = new QuestionDto();
        questionDto.setId(question.getId());
        if (question.getCategory() != null) {
            questionDto.setCategoryId(question.getCategory().getId());
        }
        questionDto.setDifficultyId(question.getDifficulty().ordinal());
        questionDto.setQuestionText(question.getQuestionText());
        questionDto.setAnswerText(question.getAnswerText());
        return questionDto;
    }

    public static Question questionToDomain(QuestionDto questionDto, CategoryRepository categoryRepository) {
        Question question = new Question();
        question.setId(questionDto.getId());
        // TODO
        question.setCategory(categoryRepository.findById(questionDto.getCategoryId()).orElse(null));
        // TODO
        question.setDifficulty(Difficulty.values()[questionDto.getDifficultyId()]);
        question.setQuestionText(questionDto.getQuestionText());
        question.setAnswerText(questionDto.getAnswerText());
        return question;
    }

    public static Category categoryToDomain(CategoryDto categoryDto) {
        Category category = new Category();
        category.setId(categoryDto.getId());
        category.setName(categoryDto.getName());
        return category;
    }
}
