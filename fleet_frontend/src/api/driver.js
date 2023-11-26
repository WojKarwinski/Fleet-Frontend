import Axios from "axios";

//GET Drivers
export const fetchDrivers = async (pageNumber, itemsPerPage, search = "") => {
  const url = `http://localhost:5132/api/Driver?search=${search}&page=${pageNumber}&pageSize=${itemsPerPage}`;

  const response = await Axios.get(url);

  return response.data;
};

//DELETE Fuelcard from Driver
export const deleteFuelcardFromDriver = async (cardNr, driverId) => {
  const url = `http://localhost:5132/api/Driver/${driverId}/Fuelcard`;

  const response = await Axios.delete(url);

  return response.data;
};

//DELETE Vehicle from Driver, check if works
export const deleteVehicleFromDriver = async (vehicleId, driverId) => {
  const url = `http://localhost:5132/api/Driver/${driverId}/Fehicle`;

  const response = await Axios.delete(url);

  return response.data;
};
