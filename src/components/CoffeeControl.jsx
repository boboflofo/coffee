import React from "react"
import CoffeeList from "./CoffeeList"
import CoffeeDetail from "./CoffeeDetail"
import CoffeeForm from "./CoffeeForm"
import CoffeeEditForm from "./CoffeeEditForm"


export default class CoffeeControl extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      coffeeShown: null,
      coffeeEditMode: false,
      coffeeFormMode: false,
      coffeeList: []
    }
  }

  changeShownCoffee = () => {
    const shownCoffee = this.state.coffeeList.filter((coffee)=>coffee.id ===id);
    this.setState({coffeeShown:shownCoffee})
  }

  add

  render() {
    let shownPage = null;

    if (this.state.coffeeFormMode) {
        shownPage = <CoffeeForm />
    } else if (this.state.coffeeEditMode) {
        shownPage = <CoffeeEditForm />
    } else if (this.state.coffeeShown != null) {
      shownPage = <CoffeeDetail />
    } else {
      shownPage = <CoffeeList coffeeList = {this.state.coffeeList}/>
    }
    <React.Fragment>
      {shownPage}
    </React.Fragment>
  }
}

