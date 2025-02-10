import axios from "axios";

const QUIZ_BASE_URL = "http://localhost:8081/quiz"

class QuizService{
    getQuiz(category, numQ){
        return axios.get(QUIZ_BASE_URL + "/getQuiz?category=" + category + "&numQ=" + numQ);
    }
}

export default new QuizService();