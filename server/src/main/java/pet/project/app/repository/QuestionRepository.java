package pet.project.app.repository;

import org.springframework.data.repository.CrudRepository;
import pet.project.app.domain.Category;
import pet.project.app.domain.Question;

import java.util.List;

public interface QuestionRepository extends CrudRepository<Question, Integer> {

    List<Question> findByCategory(Category category);
}
