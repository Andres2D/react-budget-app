import {Fragment} from 'react';

const Question = () => {
    return ( 
        <Fragment>
            <h2>Input your budget</h2>

            <form>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Your budget"
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