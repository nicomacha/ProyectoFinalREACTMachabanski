import truck from "../assets/images/truck.svg";
import card from "../assets/images/card.svg";
const Footer = () => {
  return (
    <div className="container-fluid bg-black">
      <div className="row mt-3 text-center">
        <div className="col color">
          <img src={truck} alt="" />
          <h5>ENVIOS A TODO EL PAIS</h5>
          <p>
            Envios por Correo Argentino, luego de la compra se despacha a los
            2/3 dias habiles
          </p>
        </div>
        <div className="col">
          <img src={card} alt="" />
          <h5>6 CUOTAS SIN INTERES</h5>
          <p>Con tarjetas VISA o MASTERCARD</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
