import React from 'react'
import PropTypes from 'prop-types'
import FormTemplate from './FormTemplate'
import { v4 } from 'uuid';

export default function CoffeeForm(props) {

  function handleAddCoffeeSubmit(event) {
    event.preventDefault();
    props.addCoffee({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      price: event.target.price.value, 
      roast: event.target.roast.value,
      pounds: 130,
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <FormTemplate formSubmitter={handleAddCoffeeSubmit} buttonText="add coffee"/>
    </React.Fragment>
  )
}

CoffeeForm.propTypes = {
  addCoffee: PropTypes.func
}