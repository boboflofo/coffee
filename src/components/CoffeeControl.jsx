import React from "react"
import CoffeeList from "./CoffeeList"
import CoffeeDetail from "./CoffeeDetail"
import CoffeeForm from "./CoffeeForm"


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

  render() {
    let shownPage = null;

    if (coffeeFormMode) {
        shownPage = <CoffeeForm />
    }
    <React.Fragment>
      
    </React.Fragment>
  }
}

