import "./NavBar.css";
import logo from "../../assets/logo/image.png";

// ICONS
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Carrinho from "../ModalCarrinho/Carrinho";
import { MeuCartContext } from "../../context/CartContext";

const NavBar = () => {
  const { conta } = useContext(MeuCartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(""); // Gerencia o estado da consulta
  const navigate = useNavigate(); // Hook para navegação programática

  const handleSubmit = () => {
    if (query.trim()) {
      navigate(`/search?name=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <>
      <div className="header">
        <div className="header-links-btn">
          <Link to={"/"}>
            {" "}
            <img
              style={{ width: "91px", height: "35px" }}
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="header-links">
          <div className="header-search">
            <input
              type="text"
              placeholder="Pesquisar produtos"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="header-search-sumbit"
              onClick={() => {
                handleSubmit();
              }}
            >
              <SearchIcon className="search-icon" />
            </button>
          </div>

          <button onClick={() => setIsOpen(true)} className="header-cart">
            {conta === 0 ? null : (
              <h4 className="count-products-cart">{conta}</h4>
            )}
            <ShoppingCartIcon />
          </button>

          <Link className="header-sign-in" to={"/login"}>
            <PersonOutlineIcon />
          </Link>
        </div>
      </div>
      <Carrinho isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default NavBar;
