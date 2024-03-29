import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';


const msp = state => {
    return {
        errors: state.errors,
        formType: 'Log In'
    }
}

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(msp, mdp)(SessionForm);
