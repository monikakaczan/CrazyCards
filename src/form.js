import React, {Component} from 'react'

class Form extends Component {

  render(){
    return(
      <div>
      <label>Emoployment type</label>
           <select>
            <option value = "part-time">Part-time</option>
            <option value = "full-time">Full-time</option>
            <option value = "student">Student</option>
          </select>

          <div>
          <label>Annual income</label>
          <select>
            <option value = "lowerIncome">less than £16,000</option>
            <option value = "higherIncome">more than £16,000</option>
            </select>
        </div>
        </div>
    )
  }

}
export default Form
