/* eslint-disable react/prop-types */
import { MDBCol, MDBInput } from "mdbreact";

const SearchDriverComponent = ({ searchQuery, onSearchChange }) => {
  const handleSearchChange = (event) => {
    event.preventDefault();
    onSearchChange(event.target.value);
  };

  return (
    <MDBCol md="6" >
      <MDBInput
        hint="Search Drivers"
        type="text"
        containerClass="mt-0"
        value={searchQuery}
        onChange={handleSearchChange}
        className="driver-page-input"
      />
    </MDBCol>
  );
};

export default SearchDriverComponent;
