import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { CreateNewEnvironment, UpdateEnvironment } from '../services/api';

class addEnvironment extends React.Component {

  constructor(props){
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state= { heading:'', mode: ''}
  }

  componentDidMount(){
    var path = this.props.location.pathname.split("/")[2]
    var localHeading = ''
    var localPlaceholder = ''
    var localMode = ''
    if(path === "add"){
	    localHeading = "Register New Environment"
	    localPlaceholder = "Enter Environment Name"
	    localMode='add'
    } else if(path === "edit"){
	    localHeading= "Edit Existing Environment"
	    localPlaceholder = this.props.location.state.name
	    localMode='edit'
    }

    this.setState({
	    heading: localHeading,
	    placeholder: localPlaceholder,
	    mode: localMode,
    })
  }

  onFormSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    var formDataObj = Object.fromEntries(formData.entries())
    if(this.state.mode === "add"){
    	CreateNewEnvironment(formDataObj)
    } else {
	UpdateEnvironment(formDataObj, this.props.location.state.id)
    }
    this.props.history.goBack();
  }

  render(){
    return (
    <div
      role="button"
      className="modal-wrapper"
      onClick={() => this.props.history.goBack()}
    >
      <Modal.Dialog size="lg" onClick={e => e.stopPropagation()}>
      <Modal.Header>
        <Modal.Title>{this.state.heading}</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <Container>
        <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label> Environment Name</Form.Label>
              <Form.Control type="text" name="name" placeholder={this.state.placeholder} required/>
            </Form.Group>
          
            <br/>

            <Row>
              <Col></Col>
              <Col></Col>
              <Col>
              <Button size="lg" variant="primary" type="submit">
                Submit
              </Button>
              <Button size="lg" variant="secondary" onClick={this.props.history.goBack}>
                Cancel
              </Button>
              </Col>
            </Row>
        </Form> 
        </Container>
      </Modal.Body>
    </Modal.Dialog>
  </div>
);
}
}

export default withRouter(addEnvironment);
