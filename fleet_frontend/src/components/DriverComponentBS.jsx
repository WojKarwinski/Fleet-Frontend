import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Accordion,
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Row,
  ButtonGroup,
} from "react-bootstrap";

const DriverComponentBS = ({ data }) => {
  const AddNewVehicle = () => {
    console.log("Add New Vehicle");
  };
  const AddExistingVehicle = () => {
    console.log("Add Existing Vehicle");
  };
  const AddNewFuelcard = () => {
    console.log("Add New Fuelcard");
  };
  const AddExistingFuelcard = () => {
    console.log("Add Existing Fuelcard");
  };
  const removeItem = (itemType, driverId) => {
    console.log(`Remove ${itemType} for driver with ID ${driverId}`);
    // Add logic to remove the item (fuel card or vehicle) for the specified driver
  };

  return (
    <>
      <Row className="rowOutside">
        <Col className="colOutside">First Name</Col>
        <Col className="colOutside">Last Name</Col>
        <Col className="colOutside">Birthday</Col>
        <Col className="colOutside">Vehicle</Col>
        <Col className="colOutside">Fuelcard</Col>
      </Row>
      <Accordion>
        {data.map((driver) => (
          <Accordion.Item key={driver.id} eventKey={driver.id.toString()}>
            <Accordion.Header>
              <Row>
                <Col>{driver.firstName}</Col>
                <Col>{driver.lastName}</Col>
                <Col>{driver.birthDate}</Col>
                <Col
                  xs={2}
                  style={{ color: driver.vehicleID ? "green" : "red" }}
                >
                  {driver.vehicleID || "No Vehicle"}
                </Col>
                <Col
                  xs={2}
                  style={{ color: driver.fuelCardID ? "green" : "red" }}
                >
                  {driver.fuelCardID || "No Fuelcard"}
                </Col>
              </Row>
            </Accordion.Header>
            <Accordion.Body>
              <div className="bodyContent ">
                <p>SSN: {driver.ssn}</p>
                <p>
                  Address: {driver.address.street} {driver.address.number},{" "}
                  {driver.address.city} {driver.address.postalCode}
                </p>
                <p>License Types: {driver.licenseTypes}</p>
                <div className="buttonsDiv justify-content-end">
                  <DropdownButton
                    as={ButtonGroup}
                    title="Add Vehicle"
                    id={`add-vehicle-dropdown-${driver.id}`}
                  >
                    <Dropdown.Item eventKey="1">
                      <Button variant="primary" onClick={AddNewVehicle}>
                        New Vehicle
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                      <Button variant="primary" onClick={AddExistingVehicle}>
                        Existing Vehicle
                      </Button>
                    </Dropdown.Item>
                  </DropdownButton>
                  <DropdownButton
                    as={ButtonGroup}
                    title="Add Fuelcard"
                    id={`add-fuelcard-dropdown-${driver.id}`}
                  >
                    <Dropdown.Item eventKey="1">
                      <Button variant="primary" onClick={AddNewFuelcard}>
                        New Fuelcard
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                      <Button variant="primary" onClick={AddExistingFuelcard}>
                        Existing Fuelcard
                      </Button>
                    </Dropdown.Item>
                  </DropdownButton>
                  {driver.vehicleID && (
                    <Button
                      variant="danger"
                      className="removeButton"
                      onClick={() => removeItem("Vehicle", driver.id)}
                    >
                      Remove Vehicle
                    </Button>
                  )}
                  {driver.fuelCardID && (
                    <Button
                      variant="danger"
                      className="removeButton"
                      onClick={() => removeItem("Fuelcard", driver.id)}
                    >
                      Remove Fuelcard
                    </Button>
                  )}
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default DriverComponentBS;
