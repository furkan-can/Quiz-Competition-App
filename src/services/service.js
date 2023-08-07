import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const getQuestions = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};

export default getQuestions;

