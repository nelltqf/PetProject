package pet.project.app;

import org.springframework.data.repository.CrudRepository;
import pet.project.app.domain.Category;
import pet.project.app.domain.QuestionItem;

import java.util.List;

public interface QuestionRepository extends CrudRepository<QuestionItem, Long> {

    List<QuestionItem> findByCategory(Category category);
}
