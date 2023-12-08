import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";


function CoffeeList(props){
  return (
    <React.Fragment>
        {props.CoffeeList.map((coffee) =>
          <Coffee name={coffee.name}
            showCoffee = {props.changeShownCoffee}
            origin={coffee.origin}
            price={coffee.price}
            pounds={coffee.pounds}
            key={coffee.id}
            id = {coffee.id}/>
        )}
      </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  changeShownCoffee: PropTypes.func
};

