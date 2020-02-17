import React from "react";
import SkillCard from "../components/SkillCard";
import data from "../data";
import "./SkillsSection.css";
import Fullpage from '../components/Fullpage';

export default class SkillsSection extends React.Component {
  render() {
    return (
      <Fullpage className="first">
      <div>
        <h3>{data.section[1].title}</h3>
        <div>
         
        </div>
      </div>
      </Fullpage>
    );
  }
}