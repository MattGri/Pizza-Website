import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPages from './routes/RoutesPages';

function App() {
  return (
    <Router>
      <div className="App">
        <RoutesPages />
      </div>
    </Router>
  );
}

export default App;
