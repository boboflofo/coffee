import React from 'react'
import PropTypes from 'prop-types'
import FormTemplate from './FormTemplate'

export default function CoffeeEditForm(props) {
  return(
    <React.Fragment>
      <FormTemplate formSubmitter={props.handleEditSubmit} buttonText="edit coffee"/>
    </React.Fragment>
  )
}

CoffeeForm.propTypes = {
  handleEditSubmit: PropTypes.func,
}