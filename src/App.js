import React from 'react';
import logo from './logo.svg';
import "./App.css";
import Square from './Square';
import Para from './Para'
import AboutSections from './sections/AboutSections';
import Header from './sections/Header';
import NavigationSection from './sections/NavigationSection';
import SkillsSection from './sections/SkillsSection';
import SwitchTheme from "./components/SwitchTheme.js";



class App extends React.Component {
  
constructor(){
super();
this.state={
  theme: "App-night",
};
this.changeTheme = this.changeTheme.bind(this);
}
  changeTheme() {
    this.setState({
      theme: this.state.theme === "App-night" ? "App-day" : "App-night"
    });
  }

  render() {
    return (
      <div className={this.state.theme}>
        <SwitchTheme onClick={this.changeTheme}/>
        <NavigationSection />
        <Header />
        <AboutSections />
        <SkillsSection />
      </div>
    );
  }
}
export default App;
