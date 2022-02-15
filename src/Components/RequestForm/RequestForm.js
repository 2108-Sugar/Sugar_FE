import React, { Component } from 'react';
import './RequestForm.css';

class RequestForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: '',
      itemName: '',
      category: 'tools',
      details: '',
      returnDate: '',
      error: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleError = () => {
    if (this.state.itemName && this.state.details && this.state.returnDate && this.state.startDate) {
      this.setState({ error: false })
    }
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  createRequestObject = () => {
    let newRequest = {
        name: this.state.itemName,
        details: this.state.details,
        item_category: this.state.category,
        status: "unassigned",
        borrow_date: this.state.startDate,
        return_date: this.state.returnDate,
        requested_by_id: 2,
        community_id: 1
    }
    this.props.postNewRequest(newRequest);
    this.props.toggleRequestForm();
  }

  render() {
    return (
      <div onChange={() => this.handleError()} className='request-form'>
        <p>What do you need?</p>
        <input className='item-name' onChange={event => this.setState({itemName: event.target.value})} />
        <p>Select a category</p>
        <select name='Choose category' placeholder='Please select a category' id='categoryList' onChange={event => this.setState({category: event.target.value})}>
          <option value="tools">Tools</option>
          <option value="sporting goods">Sporting goods</option>
          <option value="kitchen">Kitchen</option>
          <option value="automotive">Automotive</option>
        </select>
        <p>What day do you need it on?</p>
        <input className='date-needed' placeholder='YYYY-MM-DD' onChange={event => this.setState({ startDate: event.target.value})} />
        <p>What day will you return it on?</p>
        <input className='date-return' placeholder='YYYY-MM-DD' onChange={event => this.setState({ returnDate: event.target.value})} />
        <p >Message for loaner:</p>
        <input className='item-details' onChange={event => this.setState({details: event.target.value})}/>
        <div className='btn-bottom-row'>
          {!this.state.error ?
            <button className='request-btn'  onClick={this.createRequestObject} >Request</button>
          :
          <p className='error'>Please fill out all fields</p>
          }
          <button className='cancel-btn' onClick={this.props.toggleRequestForm}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default RequestForm;
