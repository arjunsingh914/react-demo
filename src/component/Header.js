import React,{Component} from 'react';
import './header.css';
import { Link } from "react-router-dom";
// import main from './main';
// import skills from './skills';
// import home from './home';
// const btnStyle ={
//   background:"red",
//   color:"#fff",
//   padding:"5px 10px",
//   fontSize:"15px",
//   float:"right",
//   borderRadius:"50%",
//   border:"1px solid #a99a9a"
// }   

class Header extends Component {


  render(){    
    return (
        <header>
            <nav>           
              <ul>              
                <li> <Link to="/"   isActive={(match, location) => {
    if (!match) {
      return false;
    }

    // only consider an event active if its event id is an odd number
    const eventID = parseInt(match.params.eventID);
    return !isNaN(eventID) && eventID % 2 === 1;
  }}>Home</Link> </li>
                <li> <Link to="/about"  isActive={(match, location) => {
    if (!match) {
      return false;
    }

    // only consider an event active if its event id is an odd number
    const eventID = parseInt(match.params.eventID);
    return !isNaN(eventID) && eventID % 2 === 1;
  }}>about</Link>   </li>
                <li> <Link to="/skills"  isActive={(match, location) => {
    if (!match) {
      return false;
    }

    // only consider an event active if its event id is an odd number
    const eventID = parseInt(match.params.eventID);
    return !isNaN(eventID) && eventID % 2 === 1;
  }}>skills</Link>  </li>
                <li> <Link to="/jsonData"  isActive={(match, location) => {
    if (!match) {
      return false;
    }

    // only consider an event active if its event id is an odd number
    const eventID = parseInt(match.params.eventID);
    return !isNaN(eventID) && eventID % 2 === 1;
  }}>json</Link>  </li>
              </ul>             
            </nav>                     
        </header>       
    );    
  }

}


export default Header;
