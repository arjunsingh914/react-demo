import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

import axios from 'axios';

export class skills extends Component {

    constructor() {
        super()
        this.state = {
            fName: localStorage.getItem('fName'),
            lName: localStorage.getItem('lName'),
            isLoading: true,
            errors: null
        }

    }

    getPosts() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                this.setState({
                    posts: response.data,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getPosts();
    }



    render() {
        const { isLoading, posts } = this.state;
        console.log(this.state.lname)

        return (
            <React.Fragment>
                <h2> welcome to Dashboard <b> {this.state.fname} {this.state.fname} </b>  </h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
               
                            {!isLoading ? (
                                posts.map(post => {
                                    const { id, title, body } = post;
                                    return (
                                        <tr key={id}>                                           
                                            <td>{id}</td>
                                            <td>{title}</td>
                                            <td>{body}</td>
                                        </tr>
                                      
                                    );
                                })
                            ) : (
                                    <p>Loading...</p>
                                )}
                        
                     
                    </tbody>
                </Table>

            </React.Fragment>
        );
    }

}

export default skills
