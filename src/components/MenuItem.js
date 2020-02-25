import React from "react";
import "./MenuItem.css";


class MenuItem extends React.Component {
    render() {
        const { submenu } = this.props;
        return (
          <div className="MenuItemTop">
            <div activeClass="active" to={submenu.to}>
              <li>{submenu.content}</li>
            </div>
          </div>
        );
      }
    }
export default MenuItem;


