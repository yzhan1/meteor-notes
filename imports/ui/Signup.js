import React from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';

var styles = {
  color: '#C0392B'
};

export class Signup extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if(password.length < 9){
      return this.setState({error: 'Password must be longer than 8 characters'});
    }

    this.props.createUser({email, password}, (err) => {
      if(err){
        this.setState({error: err.reason});
      }else{
        this.setState({error: ''});
      }
    });
  }
  
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1><strong>Join MeteNote</strong></h1>

          {this.state.error ? <p style={styles}>{this.state.error}</p> : undefined}

          <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Create Account</button>
          </form>

          <Link to="/">Login</Link>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  createUser: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    createUser: Accounts.createUser
  };
}, Signup);