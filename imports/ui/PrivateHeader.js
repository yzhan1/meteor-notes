import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {createContainer} from 'meteor/react-meteor-data';
import {Link} from 'react-router';
import {Session} from 'meteor/session';

export const PrivateHeader = (props) => {
  const navImgSrc = props.isNavOpen ? '/img/x.svg' : '/img/bars.png';
  
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__left">
          <img className="header__nav-toggle" src={navImgSrc} onClick={props.handleNavToggle}/>
          <h1 className="header__title">{props.title}</h1>
        </div>
        <div>
          <a className="button button--link header__github-link" target="_blank" href="https://github.com/zhanym0981/meteor-notes">GitHub</a>
          <button className="button button--on-header" onClick={() => props.handleLogout()}>Logout</button>
        </div>  
      </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  handleLogout: React.PropTypes.func.isRequired,
  isNavOpen: React.PropTypes.bool.isRequired,
  handleNavToggle: React.PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    handleLogout: () => Accounts.logout(),
    handleNavToggle: () => Session.set('isNavOpen', !Session.get('isNavOpen')),
    isNavOpen: Session.get('isNavOpen')
  };
}, PrivateHeader);

//<a className="button button--on-header" target="_blank" href="https://github.com/zhanym0981/meteor-notes">GitHub</a>