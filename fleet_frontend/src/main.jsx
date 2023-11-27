import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./layouts/RootLayout.jsx";
import DriverPage from "./pages/DriverPage.jsx";
import VehiclePagePlaceholder from "./components/VehicleComponents/VehiclePagePlaceholder.jsx";
import FuelcardPagePlcaeholder from "./components/FuelcardComponents/FuelcardPagePlcaeholder.jsx";

const queryClient = new QueryClient();

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // {
      //   path: "/",
      //   element: <App />,
      // },
      {
        path: "/Driver",
        element: <DriverPage />,
      },
      {
        path: "/Vehicles",
        element: <VehiclePagePlaceholder />,
      },
      {
        path: "/Fuelcards",
        element: <FuelcardPagePlcaeholder />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={browserRouter}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
