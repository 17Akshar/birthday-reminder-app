import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main'

function App() {
  return (
    <div className='main'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='sub-main'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
