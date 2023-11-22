import React from "react";
import { DataGridPro } from "@mui/x-data-grid-pro/DataGridPro";
import { Typography, Paper, Divider } from "@mui/material";

const columns = [
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "birthDate", headerName: "Birth Date", width: 150 },
  { field: "licenseTypes", headerName: "License Types", width: 200 },
  { field: "vehicleID", headerName: "Vehicle ID", width: 150 },
  { field: "fuelCardID", headerName: "Fuel Card ID", width: 150 },
];

const rows = [
  {
    id: 1,
    firstName: "Olivia",
    lastName: "Smith",
    birthDate: "08/09/1982",
    ssn: "48021121292",
    address: {
      street: "Elm St",
      number: " 246",
      city: " Liege",
      postalCode: " 4000",
    },
    licenseTypes: "C1E, D1E",
    vehicleID: "uvw-987",
    fuelCardID: null,
    isExpanded: false,
  },
  {
    id: 2,
    firstName: "David",
    lastName: "Davis",
    birthDate: "10/12/1983",
    ssn: "50040475311",
    address: {
      street: "Spruce St",
      number: " 159",
      city: " Namur",
      postalCode: " 5000",
    },
    licenseTypes: "BE, C1E, D1",
    vehicleID: "1-lmn-321",
    fuelCardID: null,
    isExpanded: false,
  },
];

const DriverComponentMUI = () => {
  const [expandedRows, setExpandedRows] = React.useState([]);

  const getDetailPanelContent = React.useCallback((params) => {
    if (!params || !params.row || !params.row.address) {
      return null; // Return null or any default content if data or address is missing
    }

    const { street, number, city, postalCode } = params.row.address;

    return (
      <div style={{ padding: 16 }}>
        <Typography variant="h6">Address</Typography>
        <Divider style={{ margin: "8px 0" }} />
        <Paper elevation={3} style={{ padding: 16 }}>
          <Typography>Street: {street}</Typography>
          <Typography>Number: {number}</Typography>
          <Typography>City: {city}</Typography>
          <Typography>Postal Code: {postalCode}</Typography>
        </Paper>
      </div>
    );
  }, []);

  return (
    <div style={{ width: "Auto" }}>
      <DataGridPro
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        autoHeight
        density="compact"
        getRowId={(row) => row.id}
        isRowExpandable={(params) => params.row && params.row.address}
        isRowExpanded={(params) => expandedRows.includes(params.id)}
        onSelectionModelChange={(params) => {
          setExpandedRows(params.selectionModel);
        }}
        getDetailPanelContent={getDetailPanelContent}
      />
    </div>
  );
};

export default DriverComponentMUI;
