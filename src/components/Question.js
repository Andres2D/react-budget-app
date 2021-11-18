import {Fragment, useState} from 'react';
import Error from './Error';

const Question = () => {

    // Define the state
    const [value, saveValue] = useState(0);
    const [error, saveError] = useState(false);

    // Function to get the budget
    const defineBudget = ({target}) => {
        saveValue(Number(target.value));
    }

    // Submit to define the budget
    const addBudget = e => {
        e.preventDefault();

        // Validate
        if(value < 1 || isNaN(value)) {
            saveError(true);
            return;
        }

        saveError(false);
    }

    return ( 
        <Fragment>
            <h2>Input your budget</h2>

            {error ? <Error message="The budget in invalid" /> : null}

            <form
                onSubmit={addBudget}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Your budget"
                    onChange={defineBudget}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define your budget"
                />
            </form>
        </Fragment>
     );
}
 
export default Question;