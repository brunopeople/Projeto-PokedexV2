import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreatePokemon extends Component {
  render() {
    return (<div class="form-wrapper">
     <Form>
        <Form.Group controlId="Name">
            <Form.Label>
                Nome
            </Form.Label>
        </Form.Group>
     </Form>
</div>
      
    );
  }
}