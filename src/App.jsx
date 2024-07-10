import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBarComponent/NavBarComponent";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
