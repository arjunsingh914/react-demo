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

    // handleChange = event => {
    //     this.setState({ filter: event.target.value });
    //    };



    render() {
        const { isLoading, posts } = this.state;
       console.log(this.state.filter);

        // const lowercasedFilter = filter.toLowerCase();
        // const filteredData = this.state.posts.filter(item => {
        //     return Object.keys(item).some(key =>
        //         item[key].toLowerCase().includes(lowercasedFilter)
        //     );
        // });
        

        return (
            <React.Fragment>
                <h2> Welcome to Dashboard <b> {this.state.fName} {this.state.lName} </b>  </h2>

                {/* <input value={filter} onChange={this.handleChange} />

                <div >
                    {this.state.filter}
                </div> */}

                
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
