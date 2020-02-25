import React from "react";
import "./SwitchTheme.css";

class SwitchTheme extends React.Component {  
    render() {
        const { onClick } = this.props;
        return (
        
            <button onClick={onClick}>changeTheme</button>
   
       
        );
    }
}

export default SwitchTheme;