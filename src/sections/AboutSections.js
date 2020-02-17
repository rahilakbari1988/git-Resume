import React from "react";
import data from '../data.json';
import './AboutSections.css';

class AboutSections extends React.Component {
    render() {
        return (
            <div>
                <h1>{data.section[0].title}</h1>
                <div>
                    {data.section[0].items.map(statement => {
                        return <p>{statement.content}</p>;
                    })}
                </div>
            </div>
        )
    }
}

export default AboutSections;