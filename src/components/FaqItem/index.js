// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, discription, onClickingAction} = props
  const {questionText, answerText} = faqDetails

  const imgToggle = discription
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const imgAlt = discription ? 'minus' : 'plus'

  const renderAnswer = discription ? (
    <div>
      <hr />
      <p className="para-list-style">{answerText}</p>
    </div>
  ) : (
    ''
  )

  return (
    <li className="list-container">
      <div className="list-div-container-row">
        <h1 className="heading-list ">{questionText}</h1>
        <button
          className="button-style-list"
          type="button"
          onClick={onClickingAction}
        >
          <img src={imgToggle} alt={imgAlt} className="" />
        </button>
      </div>
      {renderAnswer}
    </li>
  )
}
export default FaqItem
