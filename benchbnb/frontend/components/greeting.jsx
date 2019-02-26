import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {


    render() {
        
        {
            
            if (this.props.currentUser){
                
            let user_id = Object.keys(this.props.currentUser)[0];
            let user = this.props.currentUser[user_id];
            return (
                <div>
                    <h1>Welcome, {user.username}</h1><br></br>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            )
        }
        else {
            {if (this.props.path === '/login') {
            return (
                <div>
                    <Link to="/signup">Sign Up</Link>
                </div>
                )
            } else if (this.props.path === '/signup'){
                return (
                    <Link to="/login">Log In</Link>
                )
            } else {
                return (
                    <div>
                        <Link to="/signup">Sign Up</Link> <br></br>
                        <Link to="/login">Log In</Link>
                    </div>
                )
            }
        }
    }  
}}}


export default withRouter(Greeting);