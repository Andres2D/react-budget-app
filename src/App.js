import {useState} from 'react';
import Question from './components/Question';

function App() {

    // Define the state
    const [budget, saveBudget] = useState(0);
    const [calculate, saveCalculate] = useState(0);


  return (
    <div className="container">
      <header>
        <h1>Budget App</h1>
        
        <div className="contenido-principal contenido">
          <Question 
            saveBudget={saveBudget}
            saveCalculate={saveCalculate}
          />
        </div>
      </header>
    </div>  
  );
}

export default App;
