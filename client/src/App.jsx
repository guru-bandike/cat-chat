import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Welcome from './pages/welcome/Welcome';
import CatSelection from './pages/catSelection/CatSelection';
import { useState } from 'react';
import Chat from './pages/chat/Chat';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <main className="main-containter">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/cat-selection"
            element={<CatSelection setLoggedInUser={setLoggedInUser} />}
          />
          <Route path="/chat" element={<Chat loggedInUser={loggedInUser} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
