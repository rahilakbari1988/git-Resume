import React from "react";
import "./SwitchTheme.css";

class SwitchTheme extends React.Component {  
    render() {
        const { onClick } = this.props;
        return (
        <div>
            <button onClick={onClick}>changeTheme</button>
         
    <div id="second_div">
    
        
      
          
            <p><input type="checkbox" name="check-3" value="3" class="lcs_check lcs_tt1" checked="checked" autocomplete="off" /></p>
        </div>
        
       
    
  </div>
            
       
        );
    }
}

export default SwitchTheme;