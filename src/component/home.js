import React, { Component } from 'react'
import "./home.css"




export class home extends Component {

    constructor(props) {
        super(props)
        this.state= {
            fName:'',
            lName:''
        }
    }

 

    handleInputchange = (event) => {
        event.preventDefault()
        //console.log(event.target.value)
        // console.log(event.target.name)
        // console.log(event.target.value)

        this.setState ({
            [event.target.name] : event.target.value
         
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //const data = this.state
        //console.log(data)
        //console.log(this.state.fName)

        if(this.state.fName === "arjun" && this.state.lName === "singh"){
            this.props.history.push('/skills');
        }else if(this.state.fName !== "arjun" || this.state.fName === " "){
            alert("please enter valid user name")
        }else if(this.state.lName !== "singh" || this.state.lName === " " ){
            alert("please enter valid password")
        }

        const { fName, lName } = this.state; //destructuring
        
        localStorage.setItem('fName', fName);
        localStorage.setItem('lName', lName);
     
    }




    render() {
        return (
            <div>
                <div className="container">
                    <h1>Login</h1>
                    {/* <h1>{fName}</h1>   */}
                    <div className="row">
                        <div className="col-sm-12">
                            <form onSubmit={this.handleSubmit}>
                                <div className="inputrow">
                                    <label>First name</label>
                                    <input type="text" placeholder="Enter first Name" name="fName" onChange={this.handleInputchange} />
                                </div>

                                <div className="inputrow">
                                    <label>Last name</label>
                                    <input type="text" placeholder="Enter last Name" name="lName" onChange={this.handleInputchange} />
                                </div>
                                <div className="inputrow text-center">
                                    <button type="submit" className="btn btn-primary"> Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default home
