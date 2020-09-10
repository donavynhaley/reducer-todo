import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const addTodoForm = (props) => {
  const {modal, setModal, state, dispatch, newTodo, setNewTodo} = props;

  const toggle = () => setModal(!modal);

  // Handles changes in form and updates newPost state
  const handleChange = (event) => {
    setNewTodo(event.target.value)
}
  return (
    <div>
      <Button color="primary" onClick={toggle}>Add todo</Button>
      <Button color="success" onClick={()=>{
        dispatch({type: "CLEAR_COMPLETED"})
      }}>Clear Completed</Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add a new Task</ModalHeader>
        <ModalBody>
        {/* Form would export this to its own fucntion if I had more time*/}
        <div id="formContainer">
          <Form onSubmit={(event) => event.preventDefault()}>
            <FormGroup>
              <Input
                type="text"
                name="item_name"
                id="idItem_name"
                placeholder="e.g. 'Take out trash'"
                value={newTodo}
                onChange={(event) => handleChange(event)}
              />
            </FormGroup>
            <ModalFooter>
              <Button color="primary" onClick={()=> {
                dispatch({type: 'NEW_TODO', payload: newTodo});
                setNewTodo('')
              }}>Add!</Button>
              <Button color="secondary" onClick={toggle}>Close</Button>
            </ModalFooter>
            </Form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default addTodoForm;
