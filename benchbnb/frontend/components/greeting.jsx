import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    render() {
        {if (this.props.currentUser){
            return (
                <div>
                    <h1>Welcome, {currentUser.username}</h1><br></br>
                    <button>Logout</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Link to="/signup">Sign Up</Link><br></br>
                    <Link to="/login">Log In</Link>
                </div>
            )
        }}  
    }
}

export default Greeting;