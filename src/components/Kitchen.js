import React from 'react';
import firebase from './firebase';
import { tsConstructorType } from '@babel/types';


export default class Kitchen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: ''
        }
    }
    
    updateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    addUser = (e) => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef = db.collection('users').add({
            fullname: this.state.fullname,
            email: this.state.email
        })
        this.setState({
            fullname: '',
            email: ''
        });
    }
    render(){
        return (
            <div>
                <h1>Kitchen</h1>
                <form onSubmit= { this.addUser }>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full name"
                        onChange={ this.updateInput }
                        value= { this.state.fullname }
                     />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={ this.updateInput }
                        value= { this.state.email }
                    />
                <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
    
};

