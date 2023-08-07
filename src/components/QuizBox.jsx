import PropTypes from 'prop-types';

const QuizBox = ({ children }) => {
    return (
        <div className=' w-[600px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-300 rounded-lg shadow-md p-6'>
            {children}
        </div>
    )
}

QuizBox.propTypes = {
    children: PropTypes.node.isRequired,
}

export default QuizBox;