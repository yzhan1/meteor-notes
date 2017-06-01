import React from 'react';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

var styles = {
  color: '#C0392B'
};

export class Login extends React.Component {

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
    
    this.props.loginWithPassword({email}, password, (err) => {
      if(err){
        this.setState({error: 'Invalid email and password combination.'});
      }else{
        this.setState({error: ''});
      }
    });
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1><strong>Login to MeteorNote</strong></h1>

          {this.state.error ? <p style={styles}>{this.state.error}</p> : undefined}

          <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Login</button>
          </form>

          <Link to="/signup">Create account</Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginWithPassword: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    loginWithPassword: Meteor.loginWithPassword
  };
}, Login);