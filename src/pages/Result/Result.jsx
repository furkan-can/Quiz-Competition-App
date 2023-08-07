import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let { answers } = location.state;
    answers = answers.filter((_, index) => index !== 0 && index !== 1);

    useEffect(() => {
    }, [answers]);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center ">
            <h1 className="text-2xl text-center font-semibold mb-4">Quiz Result</h1>
            <table className="w-[600px] divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Question
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Your Answer
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {answers.map((answer, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap capitalize">
                                {index + 1} - {answer.question}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap capitalize">
                                {answer.index == 0 ? "A" : answer.index == 1 ? "B" : answer.index == 2 ? "C" : answer.index == 3 ? "D" : "X"} - {answer.answer}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate("/")} className="bg-blue-500 hover:bg-blue-600 text-white w-40 font-extrabold text-lg uppercase py-2 px-4 rounded-lg shadow-md focus:outline-none mt-4">Play Again</button>
        </div>
    )
}

export default Result;