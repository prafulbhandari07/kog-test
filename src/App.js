
import './App.css';

function App() {
  return (
    <div className='container'>
      <div id='cont'>

        <p>LEARN MORE ABOUT KOGNICS</p>
        <p>Leverage the power of AI to unleash your company's potential!</p>
        <div className='card'>
          <div id='child'>
            <p id='demo'>Get a Demo
            </p>
            <p>
              To see how Kognics works and how it's going to increase your business's worth.
            </p>
            <form className='form'>
              <p>Name:</p>
              <input type='text'></input>
              <p>Email ID:</p>
              <input type='text'></input>
              <p>Company Name:</p>
              <input type='text'></input>
              <button >Request a Demo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
