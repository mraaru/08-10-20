import React, { Component } from "react";
import Top from "../../Pages/Component/Layout/Top";
import Menu from '../../Pages/Component/Layout/Menu';
import Sidebar from '../../Pages/Component/Layout/Sidebar';
import Footer from '../../Pages/Component/Layout/Footer';
import Homexx from '../../Pages/Component/Container/Homex/Homexx'
export class Home extends Component {
  render() {
    return (
      <>
            <Top />
            
            <Menu />
            <br /><br /><br />
            <Homexx />
            <Footer />
            <Sidebar />

      </>
    );
  }
}

export default Home;
