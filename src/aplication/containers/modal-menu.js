import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalMenu(props){
    return (
      <Modal
        show={props.state}
        onHide={props.onHide}
        dialogClassName="modalMenu"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className='title-container-modal'>
            <h4>SOURCES OF INSPIRATION</h4>
            <ul>
              <li>Quotes</li>
              <li>Questions</li>
              <li>Books</li>
              <li>Media</li>
              <li>Concepts</li>
            </ul>
          </div>
          <div className='title-container-modal'>
            <h4>PRODUCTIVITY</h4>
            <ul>
              <li>Health</li>
              <li>Travel</li>
              <li>Lifestyle</li>
            </ul>
          </div>
          <div className='title-container-modal'>
            <h4>COMMUNITY</h4>
            <ul>
              <li>Become a member</li>
              <li>Search member</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p>Be part of a great and consciousness community</p>
          <a>TELL YOUR STORY</a>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalMenu;
