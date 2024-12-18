import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Welcome from './pages/welcome/Welcome';

function App() {
  return (
    <Router>
      <main className="main-containter">
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
