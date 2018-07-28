import React from 'react';
import Button from './../components/home/Button';
import { connect } from "react-redux";
import { setRequisites } from './../actions/index';

class Registration extends React.Component{

    setToStorage = (event) =>{
        event.preventDefault();
        this.props.setToStorage(this.refs.name.value, this.refs.email.value);
        this.props.history.push('/settings');
    }

    render(){
        return <div className='registration'>
        <h3>Welcome to match-match game, sign up pls!</h3>
        <form onSubmit={this.setToStorage}>
            <label>Name:<input ref="name" type="text" required placeholder="Enter a name"/></label>
            <label>Email:<input ref="email" type="email" placeholder="Enter a valid email address" required/></label>
            <div className="registration-button-container">
                <Button className="registration-button" location="/" name="Back"/>
                <input className="registration-button" type="submit" value="Next"/>
            </div>
        </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setToStorage: (name, email) =>{
            dispatch(setRequisites(name, email));
        }
    }
  }

export default connect(null, mapDispatchToProps)(Registration);