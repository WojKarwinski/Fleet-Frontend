import Axios from "axios";

export const fetchDrivers = async (pageNumber, itemsPerPage, search = "") => {
  // Construct the URL with query parameters for pagination and optional search
  const url = `http://localhost:5132/api/Driver?search=${search}&page=${pageNumber}&pageSize=${itemsPerPage}`;

  // Send the request with Axios
  const response = await Axios.get(url);

  // Return the data received from the API
  return response.data;
};
