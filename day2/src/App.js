import './App.css';
import HelloFunc from './HelloFunc';
import Hello from './HelloClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello/>
        <HelloFunc/>
      </header>
    </div>
  );
}

export default App;
