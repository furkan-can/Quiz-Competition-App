import Header from "../../components/Header";
import QuizBox from "../../components/QuizBox";
import QuizBody from "../../components/QuizBody";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import getQuestions from "../../services/service"

const Quiz = () => {
    const [data, setData] = useState([]);
    const [time, setTime] = useState(5);
    const [canAnswer, setCanAnswer] = useState(false);
    const [isFinish, setIsFinish] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState({
        question: "",
        options: ["", "", "", ""],
        answer: "",
    });
    const [questionIndex, setQuestionIndex] = useState(0);


    const prepareQuestions = (questions) => {
        return questions.slice(0, 2).map((question) => {
            return {
                question: question.title,
                answer: "A",
                options: [
                    question.body.split(' ').slice(0, 3).join(' '),
                    question.body.split(' ').slice(3, 7).join(' '),
                    question.body.split(' ').slice(7, 10).join(' '),
                    question.body.split(' ').slice(6, 9).join(' '),
                ],
            };
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const questionsData = await getQuestions();
                const questions = prepareQuestions(questionsData);
                setData(questions);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (data.length > 0 && questionIndex < data.length) {
            setCurrentQuestion(data[questionIndex]);
        }
    }, [data, questionIndex]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
            } else {
                if (questionIndex >= data.length - 1) {
                    setIsFinish(true);
                    setCanAnswer(false);
                    return;
                }
                setQuestionIndex((questionIndex) => questionIndex + 1);
                setTime(5);
            }
            if (time <= 4)
                setCanAnswer(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, [time, questionIndex, data.length]);

    useEffect(() => {
        setCanAnswer(false);
    }, [questionIndex, data.length]);



    return (
        <QuizBox>
            <Header time={time} />
            <QuizBody isFinish={isFinish} questionIndex={questionIndex + 1} canAnswer={canAnswer} question={currentQuestion.question} options={currentQuestion.options} />
            <Footer questionIndex={questionIndex + 1} />
        </QuizBox>
    )
}

export default Quiz;