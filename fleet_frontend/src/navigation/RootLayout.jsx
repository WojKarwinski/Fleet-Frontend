import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>HEADER</header>
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  );
};

export default RootLayout;
