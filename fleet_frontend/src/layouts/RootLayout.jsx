import { NavLink, Outlet } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { useState } from "react";


const RootLayout = () => {

  const [page, setPage] = useState("driver-page");

  return (
    <div className="root-layout">
      <header className="root-header">
        <h1 className={page}>Fleet manager</h1>
      </header>

      <div className="main-page">
        <nav className="root-navigation-menu">
          <IconContext.Provider value={{className: "icon-button"}} activeClassName="active">
            <NavLink to="/Driver" className="driver-page" onClick={() => setPage("driver-page")}><MdPerson/></NavLink> 
            <NavLink to="/Vehicles" className="vehicle-page" onClick={() => setPage("vehicle-page")}><FaCar /></NavLink>
            <NavLink to="/Fuelcards" className="fuelcard-page" onClick={() => setPage("fuelcard-page")}><GoCreditCard /></NavLink>
          </IconContext.Provider>
        </nav>
        <div className="main-parent">
          <main>
            <Outlet />
          </main>
        </div>

      </div>

    </div>
  );
};

export default RootLayout;
