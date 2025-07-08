import backgroundImage from '../assets/home.jpg'; 
import '../style/index.css';

function Home() {
  return (
    <div className="home-cover"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '920px',
        color: 'white',
        padding: '50px'
      }}
    >
      <h1>Full Stack Developer</h1>
      <p>Welcome to my interactive portfolio book</p>
    </div>
  );
}

export default Home;
