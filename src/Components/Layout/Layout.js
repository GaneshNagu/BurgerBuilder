import React, { Component } from "react";
import Auxillary from "../../Hoc/Auxillary";
import classes from "./Layout.css";
import ToolBar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state = {
    showsidedrawer: false
  }

  Imageclickedhandler = () => {

    this.setState({ showsidedrawer: true })
  }

  sideDrawercloseHandler = () => {

    this.setState({ showsidedrawer: false })
  }

  render() {
    return (
      <Auxillary>
        <ToolBar imgclicked={this.Imageclickedhandler} />
        <SideDrawer open={this.state.showsidedrawer} closed={this.sideDrawercloseHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxillary>
    )
  }
}
export default Layout;
