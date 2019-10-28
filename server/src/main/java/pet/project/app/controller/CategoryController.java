package pet.project.app.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pet.project.app.dto.CategoryDto;
import pet.project.app.manager.Manager;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CategoryController.class);

    private final Manager manager;

    @Autowired
    public CategoryController(Manager manager) {
        this.manager = manager;
    }

    @GetMapping(path = "/")
    public List<CategoryDto> getCategories() {
        return manager.getCategories();
    }

    @PostMapping(path = "/add")
    public CategoryDto addQuestion(@RequestBody CategoryDto categoryDto) {
        return manager.createCategory(categoryDto);
    }

    @PutMapping(path = "/edit")
    public CategoryDto editCategory(@RequestBody CategoryDto categoryDto) {
        manager.updateCategory(categoryDto);
        return categoryDto;
    }

    @DeleteMapping(path = "/delete/{categoryId}")
    public void deleteCategory(@PathVariable(value = "categoryId") Integer categoryId) {
        manager.deleteCategory(categoryId);
    }
}
