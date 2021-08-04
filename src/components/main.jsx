import React, {useState} from 'react';

const Main = () => {
    const [values, setValues] = useState({})
    const [list, setList] = useState([]);
    
    const handleChange = (e, name) => {
        const getValue = e.target.value
        const obj = {
            [name]: getValue
        }
        setValues(prevState => ({...prevState, ...obj}))
    }

    const handleValue = () => {
        setList(prevState => [...prevState, {
            ...values
        }])
    }

    const handleDelete = (id) => {
        setList(prevList => {
            return prevList.filter((arr, index) => index !== id
            )
        })
    }

    const amount= list.map(item => parseFloat(item.amount))
    
    const income = amount.filter(item => item > 0).reduce((acc, value) => (acc + value), 0).toFixed(2);

    const expense = (amount.filter(item => item < 0).reduce((acc, value) => (acc + value), 0) * -1).toFixed(2);

    const balance = (income - expense).toFixed(2);

    return (
        <React.Fragment>
            <h1>Expense Tracker</h1>
            <h3>Your Balance</h3>
            <h1>${balance}</h1>
            <h3>income</h3>
            <h3>{income}</h3>
            <h3>expense</h3>
            <h3>{expense}</h3>
            <div className="history">
                <h3>History</h3>
                <ul>
                    {list.map((item, index) => {
                        return <li className={item.amount < 0 ? 'minus' : 'plus'}
                                    key={index}>
                                    <span onClick={() => handleDelete(index)}>x</span>
                                    <span>{item.text}</span>                                    
                                    <span>{item.amount > 0 ? '+' : '-'}{Math.abs(item.amount)}</span>
                                </li>
                    })}
                </ul>
            </div>
            <div className="Text">
                <p>text</p>
                <input onChange={(e) => handleChange(e, 'text')} type="text" />
            </div>
            <div className="Text">
                <p>Amount</p>
                <input onChange={(e) => handleChange(e, 'amount')} type="number" />
            </div>
            <button onClick={handleValue}>add transaction</button>
        </React.Fragment>
    )
}

export default Main;