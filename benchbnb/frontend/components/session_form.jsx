import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    updateUsername(e) {
        this.setState({ username: e.target.value})
    }

    updatePassword(e) {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input value={this.state.username} type="text" onChange={this.updateUsername.bind(this)}></input>
                    </label><br></br>
                    <label>Password:
                        <input value={this.state.password} type="password" onChange={this.updatePassword.bind(this)}></input>
                    </label><br></br>
                    <button type="submit">{this.props.formType}!</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;