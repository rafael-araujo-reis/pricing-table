import './styles/styles.scss';

function App() {
  return (
    <div className="container">
      <header>
        <div className="title">
          <h1>Conheça nossos planos</h1>
          <p>Conheça nossas soluções e escolha o plano ideal para o seu próximo projeto</p>
        </div>
      </header>

      <div className="planos">
        <div className="card">
          <div className="header">
            <h3>Free</h3>
          </div>
          <div className="body">


            <div className="price">
              <h2>
                R$ 0<span>,00 </span>
                <span>/mês</span>
              </h2>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga.</p>

            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>

          </div>
          <button>Assinar</button>
        </div>

        <div className="card">
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
          <button id="best">Assinar</button>
        </div>

        <div className="card">
          <div className="header">
            <h3>Profissional</h3>
          </div>
          <div className="body">


            <div className="price">
              <h2>
                R$ 59<span>,00 </span>
                <span>/mês</span>
              </h2>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fuga.</p>

            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>

          </div>
          <button>Assinar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
