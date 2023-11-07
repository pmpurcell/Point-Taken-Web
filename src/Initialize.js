import './App.css';
import Navbar from './Components/Navbar';
import logo from './assets/transparentlogo.png';
import PublicRoutes from './routes/PublicRoutes.js'

function Initialize() {
  return (
    <div className="App">
      <header className="app-header">
        <section className="curved">
          <div className="cover-box">
            <img id='logo' src={logo} alt='Point Taken Logo'/>
          </div>
          <h4>Horn-spiked rock from Nashville, Tennessee</h4>
        </section>
        <Navbar/>
      </header>
      <PublicRoutes />
    </div>
  );
}

export default Initialize;
