import React from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

class ModalTest extends React.Component {

  onFormSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
     var formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)
  }

  render(){
    return (
    <div
      role="button"
      className="modal-wrapper"
      onClick={() => this.props.history.goBack()}
    >
      <Modal.Dialog onClick={e => e.stopPropagation()}>
      <Modal.Header>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
      <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Product Name" />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
</Form> 
      </Modal.Body>
    
      <Modal.Footer>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
);
}
}

export default withRouter(ModalTest);