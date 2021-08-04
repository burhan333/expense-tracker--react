import React from 'react';

const IncomExpense = ({income, expense}) => {
    return (
        <React.Fragment>
            <h3>income</h3>
            <h3>{income}</h3>
            <h3>expense</h3>
            <h3>{expense}</h3>
        </React.Fragment>
    )
}

export default IncomExpense;