import {useState} from 'react';
import shortid from 'shortid';
import Error from './Error';

const Form = ({saveExpense, saveCreateExpense}) => {

    const [name, saveName] = useState('');
    const [quantity, saveQuantity] = useState(0);
    const [error, saveError] = useState(false);

    const addExpense = e => {
        e.preventDefault();

        // validate
        if(quantity < 1 || isNaN(quantity) || name.trim() === '') {
            saveError(true);
            return;
        } 

        saveError(false);

        // build the expense
        const expense = {
            name,
            quantity,
            id: shortid.generate()
        }
        // pass the expense to the main component
        saveExpense(expense);
        // reset the form

        saveName('');
        saveQuantity(0);
        saveCreateExpense(true);
    }

    return (
        <form
            onSubmit={addExpense}>
            <h2>Add your expenses here</h2>

            { error ? 
                <Error
                    message="All fields are required"    
                /> : 
                null           
            }

            <div className="campo">
                <label>Expense name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Transport"
                    value={name}
                    onChange={e => saveName(e.target.value)} 
                />
            </div>

            <div className="campo">
                <label>Expense value</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="500"
                    value={quantity}
                    onChange={e => saveQuantity(Number(e.target.value))} 
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />
        </form>
      );
}
 
export default Form;