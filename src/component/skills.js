import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'

export class skills extends Component {

    constructor() {
        super()
        this.state = {
            fName: localStorage.getItem('fName'),
            lName: localStorage.getItem('lName'),
            users: []
        }

    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => this.setState({ users: json.data }));

    //         // console.log("data is")
    // }


    render() {
        const nameD = {
            color: 'red',
            textTransform: "uppercase"
        };


        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="fade alert alert-success show">Welcom to dashboard Mr. <b style={nameD}>{this.state.fName} {this.state.lName}</b></h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">

                    {/* {   
                       
                        this.state.users.map(user => (
                           <h1> {user.title}</h1>

                   
                            ))
                         
                    } */}


                        {/* <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table> */}
                    </div>
                </div>

            </div>
        )
    }
}

export default skills
