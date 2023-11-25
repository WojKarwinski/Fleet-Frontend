import "./App.css";
import DriverComponentBS from "./components/DriverComponentBS";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchDriverComponent from "./components/SearchDriverComponent";
import { useState } from "react";

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
      <DriverComponentBS searchQuery={searchQuery} />
    </>
  );
}

export default App;
