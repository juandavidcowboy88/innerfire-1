import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import facebook from '../../images/facebook.png'
import google from '../../images/google.png'

function ModalLog(props){
    return (
      <Modal
        show={props.state}
        onHide={props.onHide}
        dialogClassName="modalLog"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6'>
                <div className='title-modal-login'>
                  <h4>Sign Up /</h4>
                </div>
                <div className='title-modal-login'>
                  <h4>Log In</h4>
                </div>
                <div className="cont-input-modal">
                  <input type="text"/>
                </div>
                <div className="cont-input-modal">
                  <input type="text"/>
                </div>
                <div className="cont-input-modal">
                </div>
                <div className="cont-input-modal">
                  <button type="button" className='button-login' name="button">SIGN UP</button>
                </div>
                <div className="">
                  <div className="row">
                    <div className="col-xs-6">
                      <img className="img-social-modal" src={facebook} alt="" /><p className="text-social-modal">Sign up with facebook</p>
                    </div>
                    <div className="col-xs-6">
                      <img id="google" className="img-social-modal" src={google} alt="" /> <p className="text-social-modal">Sign up with google</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden-xs col-sm-6'>
                <div className='image-login'> </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
}

export default ModalLog;
