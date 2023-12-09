import React from "react";
import PropTypes from "prop-types";

export default function CoffeeDetail(props) {
  
  return (
    <React.Fragment>
      <h1>{props.coffee.name}</h1>
      <h3>Originally from{props.coffee.origin}</h3>
      <h3>${props.coffee.price} per pound</h3>
      <h3>{props.coffee.roast} roast</h3>
      <h3>{props.coffee.pounds} pounds</h3>
      <button onClick = {() => props.handleSell(props.coffee)}></button>
    </React.Fragment>
  )
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  handleSell: PropTypes.func
}


        
        
        
        
        