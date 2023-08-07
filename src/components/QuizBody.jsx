import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizBody = ({ question, options, canAnswer, questionIndex, isFinish }) => {
    const [selectedOption, setSelectedOption] = useState(-2);
    const navigate = useNavigate();

    const [answers, setAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleOptionClick = (index) => {
        if (!canAnswer) return;
        setSelectedOption(index);
        saveAnswer(index);
    };

    const saveAnswer = (index) => {
        const existingAnswerIndex = answers.findIndex((answer) => answer.question === question);

        if (existingAnswerIndex !== -1) {
            answers[existingAnswerIndex] = {
                index: index,
                question: question,
                answer: options[index],
            };
        } else {
            answers.push({
                index: index,
                question: question,
                answer: options[index],
            });
        }

        setAnswers([...answers]);
        setIsAnswered(true);
    };

    useEffect(() => {
        if (!isAnswered) {
            answers.push({
                index: 4,
                question: question,
                answer: "Not Answered",
            });
            setAnswers([...answers]);
        }
        setSelectedOption(-1);
        setIsAnswered(false);
        if (isFinish) {
            navigate('/result', { state: { answers: answers } });

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionIndex, isFinish]);

    return (
        <section className="p-2 flex flex-col gap-8">
            <div className="text-xl capitalize px-4 pt-2 font-semibold">
                {question}
            </div>
            <div className="px-4">
                {options.map((option, index) => (
                    <div key={index} onClick={() => handleOptionClick(index)} className="border bg-white border-black rounded px-2 py-4 text-base mb-2 cursor-pointer flex items-center justify-start gap-5 hover:text-blue-950 hover:bg-blue-200">
                        <input type="radio"
                            name="option"
                            disabled={!canAnswer}
                            className="w-4 h-4"
                            checked={selectedOption === index}
                            onChange={() => handleOptionClick(index)} />
                        <span className='capitalize'>{option}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

QuizBody.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    canAnswer: PropTypes.bool.isRequired,
    questionIndex: PropTypes.number.isRequired,
    isFinish: PropTypes.bool.isRequired,
}

export default QuizBody