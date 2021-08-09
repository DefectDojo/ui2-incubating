import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { CreateNewProductType } from '../services/api';

class AddProductType extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      critical_product: false,
      key_product: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount(){
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
    formDataObj['critical_product'] = this.state.critical_product;
    formDataObj['key_product'] = this.state.key_product;
    CreateNewProductType(formDataObj)
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
        <Modal.Title>Add Product Type</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <Container>
        <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Product Type Name" required/>
            </Form.Group>
          
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" placeholder="Description" required/>
            </Form.Group>

            <Row>
              <Col>
                <Form.Check
                  type='checkbox'
                  name='critical_product'
                  onChange={this.onChange}
                  label='Critical Product'
                />
              </Col>
              <Col>
                <Form.Check
                  type='checkbox'
                  name="key_product"
                  onChange={this.onChange}
                  label="Key Product"
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

export default withRouter(AddProductType);