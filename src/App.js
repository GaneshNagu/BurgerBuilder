import React, { Component } from 'react';
import Layout from "./Components/Layout/Layout";
import Burgerbuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Layout />

        <Switch>
          <Route path='/Checkout' component={Checkout} />
          <Route path='/' exact component={Burgerbuilder} />
        </Switch>

        {/* <Burgerbuilder />
        <Checkout/> */}
      </div>
    );
  }
};

export default App;
