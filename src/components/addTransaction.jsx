import React from 'react'

const AddTransaction = ({handleChange, handleValue}) => {
    return(
        <React.Fragment>
            <h3>Add New Transaction</h3>
            <div className="Text">
                <p>text</p>
                <input onChange={(e) => handleChange(e, 'text')} type="text" />
            </div>
            <div className="Text">
                <p>Amount</p>
                <input onChange={(e) => handleChange(e, 'amount')} type="number" />
            </div>
            <button onClick={handleValue} className="btn">add transaction</button>
        </React.Fragment>
    )
}

export default AddTransaction;