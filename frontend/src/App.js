import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import ClientNavbar from './components/ClientNavbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <ClientNavbar />
      <div className='content'>
        <Home />
      </div>
    </div>

  );
}

export default App;
