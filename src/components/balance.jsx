import React from 'react'

const Balance = (props) => {
    return (
        <React.Fragment>
            <h3>Your Balance</h3>
            <h1>${props.Balance}</h1>
        </React.Fragment>
    )
}

export default Balance;