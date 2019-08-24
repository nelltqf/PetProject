package pet.project.app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import pet.project.app.domain.Category;
import pet.project.app.domain.Difficulty;
import pet.project.app.domain.QuestionItem;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
public class SampleController {

    private static final Logger LOGGER = LoggerFactory.getLogger(SampleController.class);

    @GetMapping(path = "/categories")
    public List<String> getCategories() {
        return Arrays.asList("Java Core", "Collections", "Multithreading");
    }

    @GetMapping(path = "/questions/{categoryId}")
    public List<QuestionItem> getQuestions(@PathVariable(value = "categoryId") String categoryId) {
        switch (categoryId) {
            case "0":
                return Arrays.asList(
                        new QuestionItem(Category.JAVA_CORE, Difficulty.T1,
                                "How to create custom annotation?",
                                "@Retention(RetentionPolicy.RUNTIME)\n" +
                                        "@Target(ElementType.FIELD)\n" +
                                        "public @interface JsonElement {\n" +
                                        "    public String key() default \"\";\n" +
                                        "}"),
                        new QuestionItem(Category.JAVA_CORE, Difficulty.T3, "Java Core 2", "Sample answer 2"));
            case "1":
                return Arrays.asList(
                        new QuestionItem(Category.COLLECTIONS, Difficulty.T2, "Collections 1", "Sample answer 1"),
                        new QuestionItem(Category.COLLECTIONS, Difficulty.T1, "Collections 2", "Sample answer 2"));
            case "2":
                return Arrays.asList(
                        new QuestionItem(Category.MULTITHREADING, Difficulty.T0, "Multithreading 1", "Sample answer 1"),
                        new QuestionItem(Category.MULTITHREADING, Difficulty.T4, "Multithreading 2", "Sample answer 2"));
        }
        return Collections.emptyList();
    }

    @PostMapping(path = "/addQuestion")
    public QuestionItem addQuestion(@RequestBody QuestionItem questionItem) {
        LOGGER.info("Saved questionItem");
        return questionItem;
    }
}
