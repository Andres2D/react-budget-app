import React, {Fragment} from 'react';
import { reviewBudget } from '../helpers';

const BudgetControl = ({budget, calculate}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Budget: ${budget}
            </div>
            <div className={reviewBudget(budget, calculate)}>
                Calculate: ${calculate}
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;
