import { Button } from "../Button/index";
import { Container } from "./styles";

export function Card() {
  return (
    <Container>
      <div className="header best">
        <h3>Básico</h3>
        <span >Popular</span>
      </div>
      <div className="body">


        <div className="price">
          <h2>
            R$ 29<span>,00 </span>
            <span>/mês</span>
          </h2>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga.</p>

        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>

      </div>
      <Button />
    </Container>
  );
}