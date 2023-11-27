import { useState } from "react";
import DriverManagementComponent from "../components/DriverManagementComponent";
import DriverComponentBS from "../components/DriverComponentBS";

const DriverPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <DriverManagementComponent
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        showModal={showModal}
        handleModalShow={handleModalShow}
        handleModalClose={handleModalClose}
      />
      <DriverComponentBS
        searchQuery={searchQuery}
        handleModalClose={handleModalClose}
      />
    </div>
  );
};

export default DriverPage;
