import Question from './components/Question';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Budget App</h1>
        
        <div className="contenido-principal contenido">
          <Question />
        </div>
      </header>
    </div>  
  );
}

export default App;
