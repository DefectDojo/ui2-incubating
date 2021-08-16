import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { CreateNewTestType } from '../services/api';

class AddTestType extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      static_tool: false,
      dynamic_tool: false,
      active: true,
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

  onFormSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    var formDataObj = Object.fromEntries(formData.entries())
    formDataObj['static_tool'] = this.state.static_tool;
    formDataObj['dynamic_tool'] = this.state.dynamic_tool;
    formDataObj['active'] = this.state.active;
    CreateNewTestType(formDataObj)
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
        <Modal.Title>Register New Test Type</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <Container>
        <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Test Type Name" required/>
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