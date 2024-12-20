import { useState } from 'react';

import './CatSelection.css';
import cats from '../../data/cats';
import CatCard from '../../components/catCard/CatCard';
import { useNavigate } from 'react-router-dom';

function CatSelection({ setLoggedInUser }) {
  const [userName, setUserName] = useState('');
  const [selectedCatId, setSelectedCatId] = useState(null);
  const navidate = useNavigate();

  const handleSelection = () => {
    setLoggedInUser({ id: 1, name: userName, typeId: selectedCatId });
    navidate('/chat');
  };
  return (
    <div className="cat-selection-container">
      <header className="header-container">
        <h1>Select Your Inner Cat</h1>

        {!selectedCatId ? (
          <>
            <h2>Your personality is about to take the form of a 😻!</h2>
            <p>
              Choose a cat persona that feels most like you. Whether you’re exploring or connecting,
              your inner cat will guide the way.
            </p>
          </>
        ) : (
          <>
            <h2>Meow-gnificent choice, {cats.find((c) => c.id === selectedCatId).name}!</h2>
            <p>But very cat deserves a special & unique name!</p>
            <input
              type="text"
              placeholder="Type your username here"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <button onClick={handleSelection} disabled={userName.length === 0}>
              Lest Go🚀
            </button>
          </>
        )}
      </header>
      <div className="cat-card-container">
        {cats.map((cat, index) => (
          <CatCard
            key={index}
            cat={cat}
            selectedCatId={selectedCatId}
            setSelectedCatId={setSelectedCatId}
          />
        ))}
        <p>More Coming Soon...</p>
      </div>
    </div>
  );
}

export default CatSelection;
