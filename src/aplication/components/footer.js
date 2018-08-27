import React, { Component } from 'react';
import logoFooter from '../../images/logoFooter.png'
import './navbar-footer.css';

class Footer extends Component {
  render(){
    return(
      <div className='container'>
        <div className='row'>
        <div className='col-xs-12 col-sm-4 container-logoFooter'>
          <p className='hidden-xs'>Social network, blog & forum</p>
          <div>
            <img src={logoFooter}/>
          </div>
        </div>
        <div className='col-xs-12 col-sm-4 container-aboutFooter'>
          <p>ABOUT</p>
          <p>Terms and conditions</p>
          <p>About this projects</p>
          <p>Feedback</p>
          <p>Espanol</p>
        </div>
        <div className='col-xs-12 col-sm-4 container-socialFooter'>
          <p>SOCIAL</p>
          <p>Facebook</p>
          <p>Become a member</p>
          <p>Search members</p>
        </div>
        </div>
      </div>
    )
  }
}

export default Footer;
