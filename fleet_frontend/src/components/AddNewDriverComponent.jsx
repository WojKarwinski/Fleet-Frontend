import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { postNewDriver } from "../api/driver";

const AddNewDriverComponent = () => {
  const [driver, setDriver] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    ssn: "",
    address: {
      street: "",
      number: "",
      city: "",
      postalCode: "",
    },
    licenseTypes: [],
  });

  const licenseOptions = [
    "AM",
    "A",
    "A1",
    "A2",
    "B",
    "BE",
    "C",
    "CE",
    "C1",
    "C1E",
    "D",
    "DE",
    "D1",
    "D1E",
    "T",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDriver({ ...driver, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setDriver({ ...driver, address: { ...driver.address, [name]: value } });
  };

  const handleLicenseChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setDriver({ ...driver, licenseTypes: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... Form submission logic ...
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Form.Group as={Col} className="ColAddDriver">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={driver.firstName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} className="ColAddDriver">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={driver.lastName}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} className="ColAddDriver">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            name="birthDate"
            value={driver.birthDate}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} className="ColAddDriver">
          <Form.Label>SSN</Form.Label>
          <Form.Control
            type="text"
            name="ssn"
            value={driver.ssn}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} className="ColAddDriver">
          <Form.Label>Street</Form.Label>
          <Form.Control
            type="text"
            name="street"
            value={driver.address.street}
            onChange={handleAddressChange}
          />
        </Form.Group>

        <Form.Group as={Col} className="ColAddDriver">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="text"
            name="number"
            value={driver.address.number}
            onChange={handleAddressChange}
          />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} className="ColAddDriver">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={driver.address.city}
            onChange={handleAddressChange}
          />
        </Form.Group>

        <Form.Group as={Col} className="ColAddDriver">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            name="postalCode"
            value={driver.address.postalCode}
            onChange={handleAddressChange}
          />
        </Form.Group>
      </Row>

      <Form.Group>
        <Form.Label>License Types</Form.Label>
        <Form.Control
          as="select"
          multiple
          name="licenseTypes"
          value={driver.licenseTypes}
          onChange={handleLicenseChange}
        >
          {licenseOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Driver
      </Button>
    </Form>
  );
};

export default AddNewDriverComponent;
