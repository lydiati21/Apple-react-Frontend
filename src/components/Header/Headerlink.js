import React, { Component } from 'react'
import {Link  } from "react-router-dom";

class Headerlink extends Component {
render() {
return (
  <li className="nav-item">
    <Link className="nav-link js-scroll-trigger" to={this.props.Link}>
      {this.props.Name}
    </Link>
  </li>
);
}
}

export default Headerlink;
