import React, {Fragment} from 'react';

const BudgetControl = ({budget, calculate}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Budget: ${budget}
            </div>
            <div className="alert">
                Calculate: ${calculate}
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;
