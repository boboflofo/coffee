import React from "react";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";
import CoffeeForm from "./CoffeeForm";

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
    )[0];
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
    this.setState({ coffeeList: updatedCoffeeList });
  };

  handleClick = () => {
    if (this.state.coffeeShown != null) {
      this.setState({
        coffeeFormMode: false,
        coffeeShown: null
      });
    } else {
      this.setState((prevState) => ({
        coffeeFormMode: !prevState.coffeeFormMode,
      }));
    }
  };

  render() {
    let shownPage = null;
    let buttonText = null;

    if (this.state.coffeeShown != null) {
      shownPage = (
        <CoffeeDetail
          coffee={this.state.coffeeShown}
          handleSell={this.sellCoffeeFromList}
        />
      );
    }
    else if (this.state.coffeeFormMode) {
      shownPage = <CoffeeForm addCoffee={this.addCoffeeToList} />;
      buttonText = "Return to Coffee Display";
    // } else if (this.state.coffeeEditMode) {
    //   shownPage = <CoffeeEditForm coffee={this.shownCoffee} />;
    }  else {
      buttonText = "Add Coffee to List";
      shownPage = (
        <CoffeeList
          coffeeList={this.state.coffeeList}
          changeShownCoffee={this.changeShownCoffee}
        />
      );
    }

    return (
      <React.Fragment>
        {shownPage}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
