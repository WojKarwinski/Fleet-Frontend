import "./App.css";
import DriverComponentBS from "./components/DriverComponentBS";
import "bootstrap/dist/css/bootstrap.min.css";

// import DriverComponentMUI from "./components/DriverComponentMUI";

function App() {
  const rows = [
    {
      id: "1",
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
      fuelCardID: "3456345",
    },
    {
      id: "2",
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
    },
    {
      id: "3",
      firstName: "Menalda",
      lastName: "Tuda",
      birthDate: "20/04/1988",
      ssn: "60061812456",
      address: {
        street: "Maple St",
        number: " 789",
        city: " Ghent",
        postalCode: " 9000",
      },
      licenseTypes: "B, D",
      vehicleID: "2-rst-789",
      fuelCardID: null,
    },
    {
      id: "4",
      firstName: "Frank",
      lastName: "Thomas",
      birthDate: "22/07/1998",
      ssn: "60090301554",
      address: {
        street: "Fir St",
        number: " 753",
        city: " Charleroi",
        postalCode: " 6000",
      },
      licenseTypes: "B, DE",
      vehicleID: null,
      fuelCardID: "23452",
    },
    {
      id: "5",
      firstName: "Mike",
      lastName: "Smith",
      birthDate: "15/02/1985",
      ssn: "85021500286",
      address: {
        street: "Oak St",
        number: " 456",
        city: " Antwerp",
        postalCode: " 2000",
      },
      licenseTypes: "A1, C",
      vehicleID: null,
      fuelCardID: "543534",
    },
    {
      id: "6",
      firstName: "John",
      lastName: "Bozo",
      birthDate: "01/01/1990",
      ssn: "90010100123",
      address: {
        street: "Main St",
        number: " 123",
        city: " Brussels",
        postalCode: " 1000",
      },
      licenseTypes: "A, B",
      vehicleID: null,
      fuelCardID: null,
    },
    {
      id: "7",
      firstName: "Nicolas",
      lastName: "Polom",
      birthDate: "25/06/1992",
      ssn: "92062500258",
      address: {
        street: "Pine St",
        number: " 321",
        city: " Bruges",
        postalCode: " 8000",
      },
      licenseTypes: "A2, T",
      vehicleID: null,
      fuelCardID: null,
    },
  ];
  return (
    <>
      {/* <DriverComponentMUI /> */}
      <DriverComponentBS data={rows} />
    </>
  );
}

export default App;
