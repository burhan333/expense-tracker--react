import React from 'react'

const Balance = (props) => {
    return (
        <React.Fragment>
            <h4>Your Balance</h4>
            <h1>${props.balance}</h1>
        </React.Fragment>
    )
}

export default Balance;