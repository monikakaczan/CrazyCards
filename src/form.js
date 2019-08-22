import React, {Component} from 'react'

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      employmentType:'',
      annualIncome:''
    }
  }

  handleEmploymentType = (event) => {
    this.setState({
      employmentType: event.target.value
    })
  }




  render(){
    return(
      <div>
      <label>Emoployment type</label>
           <select value= {this.state.employmentType} onChange={this.handleEmploymentType}>
            <option value = "part-time">Part-time</option>
            <option value = "full-time">Full-time</option>
            <option value = "student">Student</option>
          </select>

        //
        </div>
    )
  }

}
export default Form
