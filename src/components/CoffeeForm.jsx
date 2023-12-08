import React from 'react'
import PropTypes from 'prop-types'
import FormTemplate from './FormTemplate'

export default function CoffeeForm(props) {
  return(
    <React.Fragment>
      <FormTemplate formSubmitter={props.handleFormSubmit} buttonText={props.buttonText}/>
    </React.Fragment>
  )
}

CoffeeForm.propTypes = {
  handleFormSubmit: PropTypes.func,
  buttonText: PropTypes.string
}