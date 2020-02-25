import React from "react";
import data from "../data.json";
import './NavigationSection.css';
import MenuItem from '../components/MenuItem';

class NavigationSection extends React.Component{
   
    render(){
        return(
        <div>
        <ul> 
            {data.navigation.map(submenu => {
                return (
                    <MenuItem submenu={submenu} />

                )
            })}
        </ul>
        </div>
        )
    }
}
export default NavigationSection;