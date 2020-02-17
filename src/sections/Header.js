import React from "react";
import data from '../data.json';
import './Header.css';
import Fullpage from '../components/Fullpage';
import {SocialIcon} from "react-social-icons";

class Header extends React.Component {
    render() {

        return(
            <Fullpage className="first">
            <div>
                <h1>{data.title}</h1>
                <h2>{data.subtitle}</h2>
            </div>
            {Object.keys(data.links).map(key => {
            return <SocialIcon url={data.links[key]} className="social" />;
          })}

            </Fullpage>
        )
    }
   
}
export default Header;


