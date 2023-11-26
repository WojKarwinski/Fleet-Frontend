import React from "react";
import { Modal, Button } from "react-bootstrap";
import SearchDriverComponent from "./SearchDriverComponent";
import AddNewDriverComponent from "./AddNewDriverComponent";

const AddDriverButtonComponent = ({
  searchQuery,
  onSearchChange,
  showModal,
  handleModalShow,
  handleModalClose,
}) => {
  return (
    <>
      <SearchDriverComponent
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
      <Button variant="primary" onClick={handleModalShow}>
        Add New Driver
      </Button>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Driver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewDriverComponent />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddDriverButtonComponent;
