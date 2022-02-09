import { Header } from './components/Header';
import { Card } from './components/Card';
import './styles/styles.scss';

function App() {
  return (
    <div className="container">
      <Header />

      <div className="planos">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
