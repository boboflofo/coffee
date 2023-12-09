import React from 'react'
import PropTypes from 'prop-types'

export default function Coffee(props) {
  return(
    <React.Fragment>
      <div onClick = {() => {props.showCoffee(props.id)}}>
        <h2>{props.name}</h2>
        <div>${props.price} per pound</div>
        <div>{props.pounds} pounds left</div>
        <hr></hr>
      </div>
    </React.Fragment>
  )
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  pounds: PropTypes.number,
  showCoffee: PropTypes.func,
  id: PropTypes.string
}