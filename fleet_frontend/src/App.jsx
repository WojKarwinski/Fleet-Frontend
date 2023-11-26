import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import DriverComponentBS from "./components/DriverComponentBS";
import SearchDriverComponent from "./components/SearchDriverComponent";
import AddNewDriverComponent from "./components/AddNewDriverComponent"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (newQuery) => {
    setSearchQuery(newQuery);
  };

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <SearchDriverComponent
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
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
      <DriverComponentBS searchQuery={searchQuery} />
    </>
  );
}

export default App;
