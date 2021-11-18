import React, {Fragment} from 'react';
import { reviewBudget } from '../helpers';
import PropTypes from 'prop-types';

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

BudgetControl.propTypes = {
    budget: PropTypes.number.isRequired,
    calculate: PropTypes.number.isRequired
}
 
export default BudgetControl;
