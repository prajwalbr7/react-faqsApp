// Write your code here.
import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {discription: false}

  onClickingAction = () => {
    this.setState(prevState => ({discription: !prevState.discription}))
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {discription} = this.state
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
            onClick={this.onClickingAction}
          >
            <img src={imgToggle} alt={imgAlt} className="" />
          </button>
        </div>
        {renderAnswer}
      </li>
    )
  }
}

export default FaqItem
