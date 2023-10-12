import React from 'react'
import Headerlink from './Headerlink';
import search from "../../Commonresources/images/icons/search-icon-sm.png";
import cart from '../../Commonresources/images/icons/cart-sm.png';
import logo from '../../Commonresources/images/icons/logo-sm.png'
import { Link } from "react-router-dom";

function Header() {
  return (
   
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <Headerlink Link="/mac/" Name="Mac" />
                <Headerlink Link="/iphone/" Name="iphone" />
                <Headerlink Link="/ipad/" Name="ipad" />
                <Headerlink Link="/watch/" Name="watch" />
                <Headerlink Link="/music/" Name="Music" />
                <Headerlink Link="/support/" Name="Support" />
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={search} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={cart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }

export default Header
