import {useState} from 'react';

const Form = () => {
    return (
        <form>
            <h2>Add your expenses here</h2>

            <div className="campo">
                <label>Expense name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Transport"
                />
            </div>

            <div className="campo">
                <label>Expense value</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="500"
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