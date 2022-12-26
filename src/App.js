import './App.css';
import Todo from './Components/Todo/Todo';
import image from '../Assets/background.webp';
import image2 from '../Assets/background2.png';
import image3 from '../Assets/background3.png';
import image4 from '../Assets/background4.png';

function App() {
  return (
    <div className="overlay">
      <Todo />
      <h1 style={{marginTop: '1rem', color: 'white'}}>Gallery</h1>
      <div
        style={{
          width: '100vw',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 300px)',
          gap: '2rem',
          padding: '1rem',
          justifyItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src={image}
          width={300}
          height={300}
          style={{objectFit: 'cover'}}
        />
        <Image
          src={image2}
          width={300}
          height={300}
          style={{objectFit: 'cover'}}
        />
        <Image
          src={image3}
          width={300}
          height={300}
          style={{objectFit: 'cover'}}
        />
        <Image
          src={image4}
          width={300}
          height={300}
          style={{objectFit: 'cover'}}
        />
      </div>
    </div>
  );
}

export default App;
