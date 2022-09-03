import './App.css';
import  Testimony  from './components/testimony';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Dette er hva elevene våre sier om freeCodeCamp:</h1>
        <Testimony/>
      </div>
    </div>
  );
}

export default App;
