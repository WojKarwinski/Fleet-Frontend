/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCol, MDBFormInline, MDBIcon, MDBInput } from "mdbreact";

import {
  Accordion,
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Row,
  ButtonGroup,
  Pagination,
} from "react-bootstrap";
import {
  fetchDrivers,
  deleteFuelcardFromDriver,
  deleteVehicleFromDriver,
} from "../api/driver";
import { CircularProgress } from "@mui/material";

const DriverComponentBS = ({ searchQuery }) => {
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
  const removeItem = async (ItemType, itemId, driverId) => {
    if (ItemType == "Vehicle") {
      await deleteVehicleFromDriver(itemId, driverId);
    }
    if (ItemType == "Fuelcard") {
      await deleteFuelcardFromDriver(itemId, driverId);
    }
    refetch();
  };

  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
  };

  const renderPagination = () => {
    const totalDrivers = data.length; // get count??
    const totalPages = 5;

    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === pageNumber}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return <Pagination>{items}</Pagination>;
  };

  //fetch drivers
  const { data, error, isError, isLoading, refetch } = useQuery({
    queryKey: ["fetchDrivers", pageNumber, itemsPerPage, searchQuery],
    queryFn: () => fetchDrivers(pageNumber, itemsPerPage, searchQuery),
    enabled: true,
    initialData: { results: [] },
  });

  if (isLoading) {
    return <CircularProgress size={48} />;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  if (!data.length) {
    return (
      <>
        <p>No drivers found</p>
        <button
          onClick={() => {
            refetch();
          }}
        >
          Reload
        </button>
      </>
    );
  }

  return (
    <>
      <Row className="rowOutside">
        <Col xs={2} className="colOutside">
          First Name
        </Col>
        <Col xs={2} className="colOutside">
          Last Name
        </Col>
        <Col xs={2} className="colOutside">
          Birthday
        </Col>
        <Col xs={2} className="colOutside">
          Vehicle
        </Col>
        <Col xs={2} className="colOutside">
          Fuelcard
        </Col>
        <Col className="emptyColumn"></Col>
      </Row>
      <Accordion>
        {data.map((driver) => (
          <Accordion.Item key={driver.ssn} eventKey={driver.ssn.toString()}>
            <Accordion.Header>
              <Col className="infoColumn" xs={2}>
                {driver.firstName}
              </Col>
              <Col className="infoColumn" xs={2}>
                {driver.lastName}
              </Col>
              <Col className="infoColumn" xs={2}>
                {driver.birthDate}
              </Col>
              <Col
                className="infoColumn"
                xs={2}
                style={{ color: driver.vehicleID ? "green" : "red" }}
              >
                {driver.vehicleID || "No Vehicle"}
              </Col>
              <Col
                className="infoColumn"
                xs={2}
                style={{ color: driver.fuelCardID ? "green" : "red" }}
              >
                {driver.fuelCardID || "No Fuelcard"}
              </Col>
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
                      onClick={() =>
                        removeItem("Vehicle", driver.vehicleID, driver.ssn)
                      }
                    >
                      Remove Vehicle
                    </Button>
                  )}
                  {driver.fuelCardID && (
                    <Button
                      variant="danger"
                      className="removeButton"
                      onClick={() =>
                        removeItem("Fuelcard", driver.fuelCardID, driver.ssn)
                      }
                    >
                      Remove Fuelcard
                    </Button>
                  )}
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
        {renderPagination()}
      </Accordion>
    </>
  );
};

export default DriverComponentBS;
