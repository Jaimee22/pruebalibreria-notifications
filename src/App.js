import logo from './logo.svg';
import './App.css';
import HolaMundoPrueba from './components/holaMundo';
import NotificationTest from './components/NotificationTest';
import NotificationSweetAlert from './components/NotificationSweetAlert';
import NotificationToastify from './components/NotificationToastify';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <HolaMundoPrueba /> */}
      <NotificationTest />
      <NotificationSweetAlert />
      <NotificationToastify />
    </div>
  );
}

export default App;
