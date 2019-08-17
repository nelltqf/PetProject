package pet.project.app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
public class SampleController {

    @GetMapping(path = "/categories")
    public List<String> getCategories() {
        return Arrays.asList("Java Core", "Collections", "Multithreading");
    }

    @GetMapping(path = "/questions/{categoryId}")
    public List<String> getQuestions(@PathParam(value = "categoryId") String categoryId) {
        switch (categoryId) {
            case "0":
                return Arrays.asList("Java Core 1", "Java Core 2");
            case "1":
                return Arrays.asList("Collections 1", "Collections 2");
            case "2":
                return Arrays.asList("Multithreading 1", "Multithreading 2");
        }
        return Collections.emptyList();
    }
}
