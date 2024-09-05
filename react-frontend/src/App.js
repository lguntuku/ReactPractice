import logo from './logo.svg';
import './App.css';
import Intro from './components/intro'
import CountRef from './components/day11/CountRef';
import CustomCounterHook from './components/day11/CustomCounterHook';

function App() {
  return (
    <div>
      {/*  <div className="App">
      <header className="App-header">
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

      {/* <Intro></Intro> */}
      {/* <CountRef></CountRef> */}
      <CustomCounterHook></CustomCounterHook>
    </div>
  );
}

export default App;
