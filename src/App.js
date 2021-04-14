import './App.scss';
import Home from './screens/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
