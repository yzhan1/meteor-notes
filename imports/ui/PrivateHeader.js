import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';
import {Link} from 'react-router';

export const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <div>
          <a className="button button--link" target="_blank" href="https://github.com/zhanym0981/meteor-notes">GitHub</a>
          <button className="button button--on-header" onClick={() => props.handleLogout()}>Logout</button>
        </div>  
      </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  handleLogout: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    handleLogout: () => Accounts.logout()
  };
}, PrivateHeader);

//<a className="button button--on-header" target="_blank" href="https://github.com/zhanym0981/meteor-notes">GitHub</a>