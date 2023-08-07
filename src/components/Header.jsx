import PropTypes from 'prop-types';

const Header = ({ time }) => {

    return (
        <header className="border p-4 rounded-t-lg flex  justify-between bg-gray-100">
            <div className="text-lg font-semibold self-center">Quiz App</div>
            <div className="flex items-center bg-blue-300 text-black p-1 rounded text-[15px]">
                <div className="text-[14px] ">Time Left</div>
                <div className="bg-blue-200  rounded p-1 ml-1 w-8 text-center select-none">{time}s</div>
            </div>
        </header>
    )
}

Header.propTypes = {
    time: PropTypes.number.isRequired,
};

export default Header;