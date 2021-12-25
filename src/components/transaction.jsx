import React from 'react'

const Transaction = ({list, handleDelete}) => {
    return(
        <React.Fragment>
            <div className="history">
                <h3>History</h3>
                <ul className="list">
                    {list.map((item, index) => {
                        return <li className={item.amount < 0 ? 'minus' : 'plus'}
                                    key={index}>
                                    <span onClick={() => handleDelete(index)} className="delete-btn">x</span>
                                    <span>{item.text}</span>                                    
                                    <span>{item.amount > 0 ? '+' : (item.amount == 0 ? '' : '-')}{Math.abs(item.amount)}</span>
                                </li>
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Transaction;