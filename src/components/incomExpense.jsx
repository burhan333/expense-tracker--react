import React from 'react';

const IncomExpense = ({income, expense}) => {
    return (
        <React.Fragment>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">{income}</p>
                </div>
                <div>
                    <h4>expense</h4>
                    <p className="money minus">{expense}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default IncomExpense;