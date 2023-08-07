import PropTypes from 'prop-types'

const Footer = ({ questionIndex }) => {
    return (
        <footer className="rounded-b-lg p-4 bg-gray-100 flex justify-start">
            <div className="question_index">{questionIndex}/10</div>
        </footer>
    )
}

Footer.propTypes = {
    questionIndex: PropTypes.number.isRequired,
}

export default Footer