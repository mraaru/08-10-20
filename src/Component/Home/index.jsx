import React, { Component } from "react";
import Top from "../../Pages/Component/Layout/Top";
import Menu from '../../Pages/Component/Layout/Menu';
import Sidebar from '../../Pages/Component/Layout/Sidebar';
import Footer from '../../Pages/Component/Layout/Footer'
export class Home extends Component {
  render() {
    return (
      <>
            <Top />
            
            <Menu />
            <br/><br/><br/>
            <Footer />
            <Sidebar />

      </>
    );
  }
}

export default Home;
