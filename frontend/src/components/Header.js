import React from 'react';
import logo from '../img/logo.svg';

const Header = (props) => {
	return(
		<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <div className="header-btns">
      	<a href="/">
      		<div className="btn">Home</div>
      	</a>
        <a href="/Page">
      		<div className="btn">Page</div>
      	</a>
      </div>
    </header>
	);
}

export default Header;