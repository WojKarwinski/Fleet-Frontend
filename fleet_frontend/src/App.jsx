import React, { useState } from "react";
import DriverComponentBS from "./components/DriverComponentBS";
import DriverManagementComponent from "./components/DriverManagementComponent";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <DriverManagementComponent
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        showModal={showModal}
        handleModalShow={handleModalShow}
        handleModalClose={handleModalClose}
      />
      <DriverComponentBS searchQuery={searchQuery} />
    </>
  );
}

export default App;
