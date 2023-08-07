import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Header = ({ time }) => {
    const [lineWidth, setLineWidth] = useState(0);

    useEffect(() => {
        if (lineWidth >= 600) {
            setLineWidth(0);
            return;
        }

        const intervalId = setInterval(() => {
            setLineWidth((prevWidth) => prevWidth + 1);
        }, 50);

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
        }, 30000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [lineWidth]);


    return (
        <header className="border p-4 rounded-t-lg flex  justify-between bg-gray-100">
            <div className="text-lg font-semibold self-center">Quiz App</div>
            <div className="flex items-center bg-blue-900 text-white p-1 rounded text-[15px]">
                <div className="text-[14px]">Time Left</div>
                <div className="bg-yellow-600 rounded p-1 ml-1 w-8 text-center select-none">{time}s</div>
            </div>
            <div style={{ width: `${lineWidth}px` }} className={`absolute bottom-0 left-0 h-1 bg-yellow-600`}></div>
        </header>
    )
}

Header.propTypes = {
    time: PropTypes.number.isRequired,
};

export default Header;