import React from 'react';
import Profiledisp from './Profiledisp';
import '../App.css';
import '../logo.svg';
import Theme from './theme';
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <Profiledisp />
                <Theme/>
                <input placeholder="Search" className="search"></input>
            </div>
        );
    }
}
export default Navbar;