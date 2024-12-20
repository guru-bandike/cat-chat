import './Welcome.css';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-contaiter">
      <svg xmlns="http://www.w3.org/2000/svg" className="logo">
        <image href={logo} width="100%" height="100%" />
      </svg>

      <div className="welcome-text-container">
        <h1>Welcome to Cat-Chat</h1>
        <h2 className="slogan">Where conversations have personality!</h2>
        <p className="app-brief-text">
          Cat-Chat is a unique chatting app where your true inner personality takes the form of a
          Cat! Whether you’re curious, adventurous, shy, or outgoing, there’s a purrfect persona for
          you. Connect with people nearby or across the globe, explore different perspectives, and
          dive into meaningful conversations—all while expressing your inner feline!
        </p>
        <button className="get-started-btn" onClick={() => navigate('/cat-selection')}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Welcome;
