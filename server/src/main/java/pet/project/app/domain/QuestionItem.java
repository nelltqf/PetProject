package pet.project.app.domain;

public class QuestionItem {

    private final Category category;

    private final Difficulty difficulty;

    private final String question;

    private final String answer;

    public QuestionItem(Category category, Difficulty difficulty, String question, String answer) {
        this.category = category;
        this.difficulty = difficulty;
        this.question = question;
        this.answer = answer;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public Category getCategory() {
        return category;
    }

    public Difficulty getDifficulty() {
        return difficulty;
    }
}
