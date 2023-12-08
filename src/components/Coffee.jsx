import React from 'react'
import PropTypes from 'prop-types'

export default function Coffee(props) {
  return(
    <React.Fragment>
      <div onClick = {props.showCoffee}>
        <h1>{props.name}</h1>
        <h3>Originally from{props.origin}</h3>
        <h3>${props.price} per pound</h3>
        <h3>{props.roast} roast</h3>
        <h3>{props.pounds} pounds</h3>
      </div>
    </React.Fragment>
  )
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  pounds: PropTypes.number
}