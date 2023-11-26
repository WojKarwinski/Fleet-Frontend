import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import SearchDriverComponent from "./SearchDriverComponent";
import AddNewDriverComponent from "./AddNewDriverComponent";
import { WidthFull } from "@mui/icons-material";

const DriverManagementComponent = ({
  searchQuery,
  onSearchChange,
  showModal,
  handleModalShow,
  handleModalClose,
}) => {
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
          <Button variant="primary" onClick={handleModalShow}>
            Add New Driver
          </Button>
        </Col>
      </Row>
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

export default DriverManagementComponent;
