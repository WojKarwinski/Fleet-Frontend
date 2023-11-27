/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { postNewDriver, putExistingDriver } from "../api/driver";

const AddNewDriverComponent = ({ editingDriver, handleModalClose }) => {
  const [driver, setDriver] = useState(
    editingDriver || {
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
    }
  );
  useEffect(() => {
    if (editingDriver) {
      const formattedDriver = {
        ...editingDriver,
        birthDate: formatBirthDate(editingDriver.birthDate),
        licenseTypes: editingDriver.licenseTypes
          .split(",")
          .map((type) => type.trim()),
      };
      setDriver(formattedDriver);
    }
  }, [editingDriver]);

  const formatBirthDate = (dateString) => {
    const parts = dateString.split("/");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };

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
    const { value, checked } = e.target;
    const newLicenseTypes = checked
      ? [...driver.licenseTypes, value]
      : driver.licenseTypes.filter((type) => type !== value);

    setDriver({ ...driver, licenseTypes: newLicenseTypes });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingDriver) {
      const licenseTypesString = driver.licenseTypes.join(", ");
      const driverDataForAPI = {
        ...driver,
        licenseTypes: licenseTypesString,
      };
      await putExistingDriver(driverDataForAPI);
    } else {
      const licenseTypesString = driver.licenseTypes.join(", ");
      const driverDataForAPI = {
        ...driver,
        licenseTypes: licenseTypesString,
      };
      await postNewDriver(driverDataForAPI);
    }
    handleModalClose(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="RowAddDriver">
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
      <Row className="RowAddDriver">
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
      <Row className="RowAddDriver">
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

      <Row className="RowAddDriver">
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
        <div
          style={{ height: "150px", overflowY: "scroll" }}
          className="LicenseDiv"
        >
          {licenseOptions.map((option, idx) => (
            <Form.Check
              type="checkbox"
              key={idx}
              value={option}
              label={option}
              checked={driver.licenseTypes.includes(option)}
              onChange={handleLicenseChange}
              style={{ textAlign: "left" }}
            />
          ))}
        </div>
      </Form.Group>

      <Button variant="primary" type="submit">
        {editingDriver ? "Update Driver" : "Create Driver"}
      </Button>
    </Form>
  );
};

export default AddNewDriverComponent;
