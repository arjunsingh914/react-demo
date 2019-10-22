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
                <li> <Link to="/"  >Home</Link> </li>
                <li> <Link to="/about">about</Link>   </li>
                <li> <Link to="/skills">skills</Link>  </li>
                <li> <Link to="/jsonData">json</Link>  </li>
              </ul>             
            </nav>                     
        </header>       
    );    
  }

}


export default Header;
