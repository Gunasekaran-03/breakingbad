import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
          
            <header id="header" className="fixed-top d-flex align-items-center header-transparent header-scrolled">
            <div className="container d-flex align-items-center justify-content-between">
        
              <div className="logo">
                <h1><a href="index.html">Breaking Bad</a></h1>                
                <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
              </div>
        
              <nav id="navbar" className="navbar">
                <ul>
                  <li><Link to='/' className="nav-link scrollto active">Home</Link></li>
                  
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
        
            </div>
          </header>
         
        );
    }
}

export default Header;