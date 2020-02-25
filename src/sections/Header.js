import React from "react";
import data from '../data.json';
import './Header.css';

import Fullpage from '../components/Fullpage';


class Header extends React.Component {
    render() {

        return(
            <Fullpage className="first">
            <div className="backblue">
                <h1 className="text-left paddingleft">{data.title}</h1>
                <h2 className="text-left paddingleft">{data.subtitle}</h2>
                <img className="img-info" src={require('../image/rahil.jpg')} />
            </div>
            </Fullpage>
        )
    }
   
}
export default Header;


