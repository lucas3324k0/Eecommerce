import "./NavBar.css";
import logo from "../../assets/logo/image.png";

// ICONS
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import Carrinho from "../ModalCarrinho/Carrinho";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header-links">
          <Link to={"/"}>
            {" "}
            <img
              style={{ width: "91px", height: "35px" }}
              src={logo}
              alt="Logo"
            />
          </Link>

          <button className="header-catalog">
            <MenuIcon /> Catalogo
          </button>

          <div className="header-search">
            <input type="text" placeholder="Pesquisar produtos" />
            <button className="header-search-sumbit">
              <SearchIcon className="search-icon" />
            </button>
          </div>

          <button className="header-favorite">
            <FavoriteBorderIcon />
          </button>
          <button onClick={() => setIsOpen(true)} className="header-cart">
            <ShoppingCartIcon />
          </button>

          <button className="header-sign-in">
            <PersonOutlineIcon />
          </button>
        </div>
      </div>
      <Carrinho isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default NavBar;
