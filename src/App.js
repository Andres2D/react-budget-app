import {useState} from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {

  // Define the state
  const [budget, saveBudget] = useState(0);
  const [calculate, saveCalculate] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);

  // Add new expense
  const addNewExpense = expense => {
    saveExpenses([
      ...expenses,
      expense
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>Budget App</h1>
        
        <div className="contenido-principal contenido">
          {showquestion ?
            (
              <Question 
                saveBudget={saveBudget}
                saveCalculate={saveCalculate}
                updateQuestion={updateQuestion}
              />
            ) : 
            (
              <div className="row">
              <div className="one-half column">
                <Form 
                  addNewExpense={addNewExpense}
                />
              </div>
              <div className="one-half column">
                2
              </div>
            </div>
            )
          }
          
        </div>
      </header>
    </div>  
  );
}

export default App;
