import React, { Component } from 'react';


const person = (props) =>{
//    return <p>Hello I'm from person.js and It's rankin is {Math.floor(Math.random() *30 )}</p>
return (
        <div>
            <p>Hello my name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
        </div>
        )
    };

// class person extends Component {
//     render(){
//         return <p>Hey name is {this.props} and age {this.props}</p>;
//     }
// }
export default person;