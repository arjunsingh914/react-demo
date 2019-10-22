import React,{Component} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
// import {Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import home from './component/home';
import skills from './component/skills';
import about from './component/about';
import jsonData from './component/jsonData';




class App extends Component {



// deleteB = () => {
//   console.log(this.props);
// }

  render(){

   // console.log(this.state.menuItem);

    return (
    <BrowserRouter>
       <div className="App">   
        <Header />

 
      
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/skills" component={skills} />
        <Route path="/jsonData" component={jsonData} />


        {/* <Switch>
           <Route exact path="/" component={home} />  
          <Route path="/about" component={about} />          
          <Route path="/skills" component={skills} />
        </Switch> */}

    
      </div>  
    </BrowserRouter>
     
    );
  }

}


export default App;
