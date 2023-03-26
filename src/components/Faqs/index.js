// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="container1">
        <div className="container2">
          <h1 className="Main-heading">FAQs</h1>
          <ul className="ulstyle">
            {faqsList.map(eachItem => (
              <FaqItem faqDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
