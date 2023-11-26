import React, { useState } from "react";
import DriverComponentBS from "./components/DriverComponentBS";
import SearchDriverComponent from "./components/SearchDriverComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddDriverButtonComponent from "./components/AddDriverButtonComponent";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (newQuery) => {
    setSearchQuery(newQuery);
  };

  return (
    <>
      <SearchDriverComponent
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <AddDriverButtonComponent />
      <DriverComponentBS searchQuery={searchQuery} />
    </>
  );
}

export default App;
