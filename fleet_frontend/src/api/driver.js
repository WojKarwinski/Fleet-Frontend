import Axios from "axios";

//GET Drivers --works
export const fetchDrivers = async (pageNumber, itemsPerPage, search = "") => {
  const url = `http://localhost:5132/api/Driver?search=${search}&page=${pageNumber}&pageSize=${itemsPerPage}`;

  const response = await Axios.get(url);

  return response.data;
};

//DELETE Fuelcard from Driver --works
export const deleteFuelcardFromDriver = async (driverId) => {
  const url = `http://localhost:5132/api/Driver/${driverId}/Fuelcard`;

  const response = await Axios.delete(url);

  return response.data;
};

//DELETE Vehicle from Driver --works
export const deleteVehicleFromDriver = async (driverId) => {
  const url = `http://localhost:5132/api/Driver/${driverId}/Vehicle`;

  const response = await Axios.delete(url);

  return response.data;
};
