
export const reviewBudget = (budget, calculate) => {
    return (budget / 4) > calculate ?
        'alert alert-danger' :
        ( (budget / 2) > calculate ?
            'alert alert-warning' :
            'alert alert-success');
}
