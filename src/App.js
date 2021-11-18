import {useState, useEffect} from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {

  // Define the state
  const [budget, saveBudget] = useState(0);
  const [calculate, saveCalculate] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, saveExpense] = useState({});
  const [createexpense, saveCreateExpense] = useState(false);

  // useEffect update calculate
  useEffect(() => {
    if(createexpense) {

      // Add new budget
      saveExpenses([
        ...expenses,
        expense
      ]);

      // calculate from the current budget
      const budgetCalculate = calculate - expense.quantity;
      saveCalculate(budgetCalculate);

      saveCreateExpense(true);
    }
  }, [expense]);

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
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List 
                  expenses={expenses}
                />

                <BudgetControl
                  budget={budget}
                  calculate={calculate}
                />
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
