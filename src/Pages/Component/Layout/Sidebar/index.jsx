import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Image/logo.jpeg";

function togglesidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}
function togglesubmenu() {
  document.getElementById("sidesubbar").classList.toggle("show");
}
function togglesubmenua() {
  document.getElementById("sidesubbar1").classList.toggle("show");
}
function togglesubmenub() {
  document.getElementById("sidesubbar2").classList.toggle("show");
}
function togglesubmenuc() {
  document.getElementById("sidesubbar3").classList.toggle("show");
}
function togglesubmenud() {
  document.getElementById("sidesubbar4").classList.toggle("show");
}
function togglesubmenue() {
  document.getElementById("sidesubbar5").classList.toggle("show");
}
function togglesubmenuf() {
  document.getElementById("sidesubbar6").classList.toggle("show");
}
function togglesubmenug() {
  document.getElementById("sidesubbar7").classList.toggle("show");
}

export class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="outli">
          <nav id="sidebar">
            <div className="mpp">
              <div className="toggle-btn" onClick={togglesidebar}>
                <span className="jan"></span>
                <span className="jan"></span>
                <span className="jan aman"></span>
              </div>
              <div className="logosidebar">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>
            </div>
            <br />
            <div className="sidebar-dextop">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-home" aria-hidden="true"></i> Home
                  </a>
                </li>
                <li onClick={togglesubmenu}>
                  <div>
                    <i className="fa fa-gavel" aria-hidden="true"></i> HerRight
                  </div>
                  <ul id="sidesubbar">
                    <li>
                      <a href="/">Know Your Right</a>
                    </li>
                    <li>
                      <a href="/">Child Right</a>
                    </li>
                    <li>
                      <a href="/">Complain To NCW</a>
                    </li>
                  </ul>
                </li>
                <li onClick={togglesubmenua}>
                  <div>
                    <i className="fa fa-book" aria-hidden="true"></i> HerStory
                  </div>
                  <ul id="sidesubbar1">
                    <li>
                      <a href="/">Article</a>
                    </li>
                    <li>
                      <a href="/">Biography</a>
                    </li>
                    <li>
                      <a href="/">Interviews</a>
                    </li>
                    <li>
                      <a href="/">Share With Us</a>
                    </li>
                  </ul>
                </li>
                <li onClick={togglesubmenub}>
                  <div>
                    <i className="fa fa-heart" aria-hidden="true"></i> HerCare
                  </div>
                  <ul id="sidesubbar2">
                    <li>
                      <a href="/">Fitness Tips</a>
                    </li>
                    <li>
                      <a href="/">Skin Care</a>
                    </li>
                    <li>
                      <a href="/">Hair Care</a>
                    </li>
                    <li>
                      <a href="/">Beauty Tips</a>
                    </li>
                  </ul>
                </li>
                <li onClick={togglesubmenuc}>
                  <div>
                    {" "}
                    <i className="fa fa-h-square" aria-hidden="true"></i>
                    HerHealth
                  </div>
                  <ul id="sidesubbar3">
                    <li>
                      <a href="/">Ayurveda</a>
                    </li>
                    <li>
                      <a href="/">Yoga</a>
                    </li>
                    <li>
                      <a href="/">Mental Wellness</a>
                    </li>
                  </ul>
                </li>
                <li onClick={togglesubmenud}>
                  <div>
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                    InNews
                  </div>
                  <ul id="sidesubbar4">
                    <li>
                      <a href="/">Daily News</a>
                    </li>
                    <li>
                      <a href="/">Opinion</a>
                    </li>
                    <li>
                      <a href="/">OP-ED Column</a>
                    </li>
                    <li>
                      <a href="/">Contributors</a>
                    </li>
                  </ul>
                </li>
                <li onClick={togglesubmenue}>
                  <div>
                    <i className="fa fa-globe" aria-hidden="true"></i> Art &
                    Culture
                  </div>
                  <ul id="sidesubbar5">
                    <li>
                      <a href="/">Indian Culture</a>
                    </li>
                    <li>
                      <a href="/">Movies</a>
                    </li>
                    <li>
                      <Link to="/book">Books</Link>
                    </li>
                    <li>
                      <a href="/">Theatre </a>
                    </li>
                    <li>
                      <a href="/">Travel India</a>
                    </li>
                  </ul>
                </li>
                <li onClick={togglesubmenuf}>
                  <div>
                    <i className="fa fa-tree" aria-hidden="true"></i> HerHome
                  </div>
                  <ul id="sidesubbar6">
                    <li>
                      <a href="/">Food Recipe</a>
                    </li>
                    <li>
                      <a href="/">Home Decor</a>
                    </li>
                    <li>
                      <a href="/">Family Care</a>
                    </li>
                    <li>
                      <a href="/">Gardening</a>
                    </li>
                  </ul>
                </li>
                <li onClick={togglesubmenug}>
                  <div>
                    <i className="fa fa-list-alt" aria-hidden="true"></i> Acumen
                    Others
                  </div>
                  <ul id="sidesubbar7">
                    <li>
                      <a href="/">Know The Loan</a>
                    </li>
                    <li>
                      <a href="/">Startup</a>
                    </li>
                    <li>
                      <a href="/">How To Start Business</a>
                    </li>
                    <li>
                      <a href="/">Government Schemes</a>
                    </li>
                    <li>
                      <a href="/">Corrections</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="siderar-mobile">
              <div className="sidebar-sec-con">
                <li>
                  <h3>Home</h3>
                </li>
                <ul>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                </ul>
                <li>
                  <h3>Home</h3>
                </li>
                <ul>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                </ul>
                <l>
                  <h3>Home</h3>
                </l>
                <ul>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                </ul>
                <li>
                  <h3>Home</h3>
                </li>
                <ul>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                </ul>
                <li>
                  <h3>Home</h3>
                </li>
                <ul>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                </ul>

                <li>
                  <h3>Home</h3>
                </li>
                <ul>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                  <li>home</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Sidebar;
