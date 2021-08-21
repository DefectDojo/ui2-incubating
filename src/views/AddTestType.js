import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { CreateNewTestType, UpdateTestType } from '../services/api';

class AddTestType extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      static_tool: false,
      dynamic_tool: false,
      active: true,
      name: "Enter Test Type Name",
      heading: '',
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    const checked = e.target.checked;
    const name = e.target.name;
    this.setState({
      [name] : checked,
    })
  }

  componentDidMount(){
    var path = this.props.location.pathname.split("/")[2]
    var localHeading = ''
    var localMode = ''
    if(path === "add"){
	    localHeading = "Register New Test Type"
	    localMode='add'
    } else if(path === "edit"){
	    localHeading= "Edit Existing Test Type"
	    localMode='edit'
    }

    this.setState({
	    heading: localHeading,
	    mode:localMode,
    });
  }

  onFormSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    var formDataObj = Object.fromEntries(formData.entries())
    formDataObj['static_tool'] = this.state.static_tool;
    formDataObj['dynamic_tool'] = this.state.dynamic_tool;
    formDataObj['active'] = this.state.active;

    if(this.state.mode === "add"){
    	CreateNewTestType(formDataObj);
    } else {
	UpdateTestType(formDataObj, this.props.location.state.id);
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
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder={this.state.name} required/>
            </Form.Group>
          
            <Row>
              <Col>
                <Form.Check
                  type='checkbox'
                  name='static_tool'
                  onChange={this.onChange}
                  label='Static Tool'
                />
              </Col>
              <Col>
                <Form.Check
                  type='checkbox'
                  name="dynamic_tool"
                  onChange={this.onChange}
                  label="Dynamic Tool"
                />
              </Col>
              <Col>
                <Form.Check
                  type='checkbox'
                  name="active"
                  onChange={this.onChange}
                  label="Active"
                />
              </Col>
            </Row>
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

export default withRouter(AddTestType);
