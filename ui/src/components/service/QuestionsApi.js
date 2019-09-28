import {BASE_URL} from "../../constants/Constants";

export class QuestionsApi {
    saveQuestion(question) {
        return fetch(`${BASE_URL}/questions/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(question),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong");
                }
            })
    }

    fetchQuestions(categoryId) {
        return fetch(`${BASE_URL}/questions/${categoryId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong");
                }
            })
    }

    deleteQuestion = questionId => {
        return fetch(`${BASE_URL}/questions/delete/${questionId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
            })
    };

    fetchCategories() {
        return fetch(`${BASE_URL}/categories/`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Something went wrong");
                }
            })
    }
}