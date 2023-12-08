import React from "react";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import CoffeeForm from "./CoffeeForm";
import CoffeeEditForm from "./CoffeeEditForm";

export default class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeShown: null,
      coffeeEditMode: false,
      coffeeFormMode: false,
      coffeeList: [],
    };
  }

  changeShownCoffee = (id) => {
    const shownCoffee = this.state.coffeeList.filter(
      (coffee) => coffee.id === id
    );
    this.setState({ coffeeShown: shownCoffee });
  };

  addCoffeeToList = (newCoffee) => {
    const updatedCoffeeList = this.state.coffeeList.concat(newCoffee);
    this.setState({
      coffeeList: updatedCoffeeList,
      coffeeFormMode: false,
    });
  };

  deleteCoffeeFromList = (id) => {
    const updatedCoffeeList = this.state.coffeeList.filter(
      (coffee) => coffee.id !== id
    );
    this.setState({
      coffeeList: updatedCoffeeList,
      coffeeShown: null,
    });
  };

  sellCoffeeFromList = (coffeeShown) => {
    const updatedCoffeeList = this.state.coffeeList.map((coffee) => {
      if (coffee.id === coffeeShown.id) {
        if (coffee.pounds > 0) {
          return { ...coffee, pounds: coffee.pounds - 1 };
        }
      }
      return coffee;
    });
    this.setState({coffeeList:updatedCoffeeList})
  };

  render() {
    let shownPage = null;

    if (this.state.coffeeFormMode) {
      shownPage = <CoffeeForm addCoffee={this.state.addCoffeeToList} />;
    } else if (this.state.coffeeEditMode) {
      shownPage = <CoffeeEditForm coffee={this.state.shownCoffee} />;
    } else if (this.state.coffeeShown != null) {
      shownPage = <CoffeeDetail handleSell={this.state.sellCoffeeFromList} />;
    } else {
      shownPage = <CoffeeList coffeeList={this.state.coffeeList} />;
    }
    <React.Fragment>{shownPage}</React.Fragment>;
  }
}
