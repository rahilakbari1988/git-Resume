import React from "react";
import "./DownIcon.css";

class DownIcon extends React.Component

{
constructor(){
  super();
}

  render()
    {
      const {icon} = this.props;

      return <img src={icon}  class="downIcon"/>
    }
  
}
export default DownIcon;
