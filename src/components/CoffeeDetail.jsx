
import React, { Component } from "react";
import PropTypes from "prop-types";

class CoffeeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localPounds: this.props.coffee.pounds,
    };
  }

  handleSell = () => {
    const { coffee, handleSell } = this.props;
    if (this.state.localPounds > 0) {
      this.setState(
        (prevState) => ({ localPounds: prevState.localPounds - 1 }),
        () => {
          handleSell({ ...coffee, pounds: this.state.localPounds });
        }
      );
    }
  };

  render() {
    const { coffee } = this.props;

    return (
      <React.Fragment>
        <h1>{coffee.name}</h1>
        <h3>Originally from {coffee.origin}</h3>
        <h3>${coffee.price} per pound</h3>
        <h3>{coffee.roast} roast</h3>
        <h3>{this.state.localPounds} pounds</h3>
        <button onClick={this.handleSell}>Sell 1 pound</button>
      </React.Fragment>
    );
  }
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  handleSell: PropTypes.func,
};

export default CoffeeDetail;


        
        
        
        
        