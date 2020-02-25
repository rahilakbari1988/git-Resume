import React from "react";
import "./MenuItem.css";
import { Link, Element } from "react-scroll";

class MenuItem extends React.Component {
    render() {
        const { submenu } = this.props;
        return (
          <div className="MenuItemTop">
            <Link activeClass="active" to={submenu.to}>
              <li>{submenu.content}</li>
            </Link>
          </div>

        );
      }
    }
export default MenuItem;


