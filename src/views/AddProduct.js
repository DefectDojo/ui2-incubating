import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { CreateNewProduct, FetchProductTypes, FetchUsers } from '../services/api';

class AddProduct extends React.Component {

  constructor(props){
    super(props)
    this.productTypeRef = React.createRef()
    this.technicalContactRef = React.createRef()
    this.productManagerRef = React.createRef()
    this.teamManagerRef = React.createRef()
    this.businessCriticalityRef = React.createRef()
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  
  createProductTypeOptions(){
    const selectElement =document.getElementById("product_type")
    FetchProductTypes()
    .then(res => res.json())
    .then(res=> res["results"])
    .then(res => res.map(arr => {
      selectElement.append(new Option(arr["name"], arr["id"]))
    }));
  }

  createUsersTypeOptions(){
    const one = document.getElementById("technical_contact");
    const two = document.getElementById("team_manager");
    const three = document.getElementById("product_manager");

    FetchUsers()
    .then(res => res.json())
    .then(res => res["results"])
    .then(res => res.map(arr => {
      one.append(new Option(arr["username"], arr["id"]));
      two.append(new Option(arr["username"], arr["id"]));
      three.append(new Option(arr["username"], arr["id"]));
    }));
  }

  componentDidMount(){
    this.createProductTypeOptions()
    this.createUsersTypeOptions()
  }

  onFormSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    var formDataObj = Object.fromEntries(formData.entries())
    formDataObj["prod_type"]=this.productTypeRef.current.value;
    formDataObj["team_manager"]=this.teamManagerRef.current.value;
    formDataObj["product_manager"]=this.productManagerRef.current.value;
    formDataObj["technical_contact"]=this.technicalContactRef.current.value;
    formDataObj["business_criticality"]=this.businessCriticalityRef.current.value;
    CreateNewProduct(formDataObj);
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
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <Container>
        <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Product Name" required/>
            </Form.Group>
          
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" placeholder="Description" required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Product Manager</Form.Label>
              <Form.Control id="product_manager" as="select" ref={this.productManagerRef}> 
                <option value="0"> ------------- </option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Technical Contact</Form.Label>
              <Form.Control id="technical_contact" as="select" ref={this.technicalContactRef}> 
                <option value="0"> ------------- </option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Team Manager</Form.Label>
              <Form.Control id="team_manager" as="select" ref={this.teamManagerRef}> 
                <option value="0"> ------------- </option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Product Type</Form.Label>
              <Form.Control id="product_type" as="select" ref={this.productTypeRef}> 
                <option value="0"> ------------- </option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Business Criticality </Form.Label>
              <Form.Control as="select" ref={this.businessCriticalityRef}> 
                <option value="none"> ------------- </option>
                <option value="very high">Very High</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
                <option value="very low">Very Low</option>
              </Form.Control>
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

export default withRouter(AddProduct);