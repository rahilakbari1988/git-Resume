import React from "react";
import data from "../data.json";
import './NavigationSection.css';
import MenuItem from '../components/MenuItem';
import { Link, Element } from "react-scroll";

class NavigationSection extends React.Component{
    constructor(){
        super()
    }
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