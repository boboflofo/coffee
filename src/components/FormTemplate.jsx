import React from "react";
import PropTypes from "prop-types";

export default function FormTemplate(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmitter}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <textarea
          name='price'
          placeholder='Price per pound' />
        <select name='roast'>
          <option value="light">Light</option>
          <option value='medium'>Medium</option>
          <option value='dark'>Dark</option>
        </select>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

FormTemplate.propTypes = {
  formSubmitter: PropTypes.func,
  buttonText: PropTypes.string
};

