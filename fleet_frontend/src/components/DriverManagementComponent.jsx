/* eslint-disable react/prop-types */
import { Modal, Button, Row, Col } from "react-bootstrap";
import SearchDriverComponent from "./SearchDriverComponent";
import AddNewDriverComponent from "./AddNewDriverComponent";
import { useState } from "react";
const DriverManagementComponent = ({ searchQuery, onSearchChange }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleAddClick = () => {
    setShowEditModal(true);
  };

  return (
    <>
      <Row>
        <Col className="DriverSearchComponent">
          <SearchDriverComponent
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
          />
        </Col>
        <Col xs="auto" className="DriverButtonComponent">
          <Button
            variant="secondary"
            onClick={handleAddClick}
            className="driver-page-button"
          >
            Add New Driver
          </Button>
        </Col>
      </Row>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Driver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {<AddNewDriverComponent handleModalClose={setShowEditModal} />}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DriverManagementComponent;
