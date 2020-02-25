import React from "react";
import data from '../data.json';
import './AboutSections.css';
import { Link, Element } from "react-scroll";
import DownIcon from "../components/DownIcon";

class AboutSections extends React.Component {
    render() {
        return (
            <div>
            <div>
                <h1>{data.section[0].title}</h1>
                <div>
                    {data.section[0].items.map(statement => {
                        return <p>{statement.content}</p>;
                    })}
                </div>
            </div>
            <Link activeClass="active" to="skills">
          <DownIcon
            icon={data.icons.down}
            onClick={() => console.log("I'm working")}
          />
        </Link>
      <Element name="skills" className="element" />
      </div>
        )
    }
}

export default AboutSections;