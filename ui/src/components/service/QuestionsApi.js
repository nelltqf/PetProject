import {BASE_URL} from "../../constants/Constants";

export class QuestionsApi {
    checkRequestStatus = response => {
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return response;
    };

    saveQuestion(question) {
        return fetch(`${BASE_URL}/questions/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(question),
        })
            .then(this.checkRequestStatus)
            .then(response => response.json())
    }

    fetchQuestions(categoryId) {
        return fetch(`${BASE_URL}/questions/${categoryId}`)
            .then(this.checkRequestStatus)
            .then(response => response.json())
    }

    deleteQuestion = questionId => {
        return fetch(`${BASE_URL}/questions/delete/${questionId}`, {
            method: 'DELETE'
        })
            .then(this.checkRequestStatus)
    };

    editQuestion = (question) => {
        return fetch(`${BASE_URL}/questions/edit`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(question),
        })
            .then(this.checkRequestStatus)
    };

    deleteCategory = categoryId => {
        return fetch(`${BASE_URL}/categories/delete/${categoryId}`, {
            method: 'DELETE'
        })
            .then(this.checkRequestStatus)
    };

    fetchCategories() {
        return fetch(`${BASE_URL}/categories/`)
            .then(this.checkRequestStatus)
            .then(response => response.json())
    }

    addCategory(category) {
        return fetch(`${BASE_URL}/categories/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        })
            .then(this.checkRequestStatus)
            .then(response => response.json())
    }

    editCategory = (category) => {
        return fetch(`${BASE_URL}/categories/edit`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        })
            .then(this.checkRequestStatus)
    };
}