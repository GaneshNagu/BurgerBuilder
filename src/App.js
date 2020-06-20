import React, { Component } from 'react';
import Layout from "./Components/Layout/Layout";
import Burgerbuilder from './Containers/BurgerBuilder/BurgerBuilder';


class App extends Component {
  render() {
    return (
      <div>
        <Layout />

        <Burgerbuilder />
      </div>
    );
  }
};

export default App;
