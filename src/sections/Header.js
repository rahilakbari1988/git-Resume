import React from "react";
import data from '../data.json';
import './Header.css';
import Fullpage from '../components/Fullpage';


class Header extends React.Component {
    render() {

        return(
            <Fullpage className="first">
            <div>
                <h1>{data.title}</h1>
                <h2>{data.subtitle}</h2>
            </div>
            
          })}

            </Fullpage>
        )
    }
   
}
export default Header;


