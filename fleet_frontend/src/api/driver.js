import Axios from "axios";

//GET Drivers
export const fetchDrivers = async (pageNumber, itemsPerPage, search = "") => {
  const url = `http://localhost:5132/api/Driver?search=${search}&page=${pageNumber}&pageSize=${itemsPerPage}`;

  const response = await Axios.get(url);

  return response.data;
};

//DELETE Fuelcard from Driver
export const removeDriverFromFuelCard = async (cardNr, driverSSN) => {
  const url = `http://localhost:5132/api/FuelCard/${cardNr}/Driver/${driverSSN}`;

  const response = await Axios.delete(url);

  return (
    response.data || { message: "Driver removed from fuel card successfully" }
  );
};
