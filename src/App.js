import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ScrambleMainPage from './GameScramble/ScrambleMainPage';
import ScrambleGame from './GameScramble/ScrambleGame';
import LandingPage from './LandingPage';
import MemoryMainPage from './MemoryGame/MemoryMainPage';
import MemoryGame from './MemoryGame/MemoryGame';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>} exact />
          <Route path="/scramble" element={<ScrambleMainPage/>} />
          <Route path="/scramble/:difficulty" element={<ScrambleGame />} />

          <Route path="/memory" element={<MemoryMainPage/>} />
          <Route path="/memoryGame/:difficulty" element={<MemoryGame />} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
