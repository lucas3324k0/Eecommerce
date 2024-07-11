import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBarComponent/NavBarComponent";
import Carrinho from "./components/ModalCarrinho/Carrinho";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Carrinho />
    </>
  );
}

export default App;
