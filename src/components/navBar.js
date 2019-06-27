import React, { Component } from "react"
import { Link } from "gatsby"
import classNames from 'classnames';
import home from "../img/home.png"
import logo from "../img/logo.png"

class NavComponent extends Component {
  constructor(){
    super();
    this.state = {
      active: false
    }
    this.toggle = this.toggle.bind(this);
    // this.reset = this.reset.bind(this);
  }

  toggle(){
    this.setState({active: !this.state.active});
  }


  render() {
    const classes = classNames({
      tabsWrapper: true, // we always want this class
      active: this.state.active, // only add this class if the state says so
   });


    return (
      <nav>
        <div className="nav-wrapper desktop">
          <Link to="/" className="home-icon">
            <img src={home} alt="Home icon" />
          </Link>
          <ul className="tabs-wrapper">
            <li className="tab">
              <Link to="/casual/" activeClassName="active">
                Casual
              </Link>
            </li>
            <li className="tab">
              <Link to="/competitivo/" activeClassName="active">
                Competitivo
              </Link>
            </li>
            <li className="tab">
              <Link to="/extremo/" activeClassName="active">
                Extremo
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-wrapper mobile">
          <img src={logo} alt="Intel Logo" className="intel-logo" />

          <button className="menu-trigger" onClick={this.toggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={classes}>
            <li className="tab">
              <Link to="/casual/" activeClassName="active">
                Casual
              </Link>
            </li>
            <li className="tab">
              <Link to="/competitivo/" activeClassName="active">
                Competitivo
              </Link>
            </li>
            <li className="tab">
              <Link to="/extremo/" activeClassName="active">
                Extremo
              </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    )
  }
}

export default NavComponent
