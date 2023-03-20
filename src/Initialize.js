import './App.css';
import Navbar from './Components/Navbar';
import logo from './assets/point_taken.jpg';

function Initialize() {
  return (
    <div className="App">
      <header className="App-header">
        <img id='logo' src={logo} alt='Point Taken Logo'/>
        <h4>Horn-spiked rock.</h4>
        <Navbar/>
      </header>
    </div>
  );
}

export default Initialize;
