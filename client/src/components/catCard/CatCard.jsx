import './CatCard.css';

function CatCard({ cat, selectedCatId, setSelectedCatId }) {
  const { id, name, personality, imageUrl } = cat;

  return (
    <div
      className={`card ${selectedCatId === id ? 'selected' : ''}`}
      onClick={() => {
        setSelectedCatId(id);
      }}
    >
      <img className="card-img" src={'../src' + imageUrl} />
      <div className="card-body">
        <p className="cat-name">{name}</p>
        <p className="cat-personality">{personality}</p>
      </div>
    </div>
  );
}

export default CatCard;
