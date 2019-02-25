import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './greeting';
import React from 'react';

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mdp = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(msp, mdp)(Greeting);