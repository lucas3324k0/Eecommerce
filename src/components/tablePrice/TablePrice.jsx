import { useContext } from "react";
import "./TablePrice.css";
import { MeuCartContext } from "../../context/CartContext";

const TablePrice = () => {
  const { cart, total } = useContext(MeuCartContext);

  return (
    <div className="View-price-container">
      <div className="Precos-container">
        <div className="info-price">
          <h3>Total: {parseFloat(total).toFixed(2)}</h3>
          <hr style={{ color: "black", width: "90%" }} />
        </div>

        <div className="btn-div">
          <button id="btn">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default TablePrice;
