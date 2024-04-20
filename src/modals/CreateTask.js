import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, saveTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    const taskObj = { title, description };
    toggle();
    saveTask(taskObj);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div class="mb-3">
              <label for="taskName" class="form-label">
                Title
              </label>
              <input
                type="test"
                class="form-control"
                id="taskName"
                aria-describedby="taskDesc"
                onChange={(e) => setTitle(e.target.value)}
              />
              <div id="taskDesc" class="form-text">
                Make up a task name.
              </div>
            </div>
            <div class="mb-3">
              <label for="taskBody" class="form-label">
                Description
              </label>
              <textarea
                rows="5"
                class="form-control"
                id="taskBody"
                aria-describedby="taskDescBody"
                onChange={(e) => setDescription(e.target.value)}
              />
              <div id="taskDescBody" class="form-text">
                Here should be a task description.
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleCreate}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask;
