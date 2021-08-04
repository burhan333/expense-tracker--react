import React, {useState} from 'react';
import Header from './header';
import Balance from './balance';
import Transaction from './transaction';
import IncomExpense from './incomExpense';
import AddTransaction from './addTransaction';

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
            <Header/>
            <Balance
                balance={balance}
            />
            <IncomExpense
                income={income}
                expense={expense}
            />
            <Transaction
                list={list}
                handleDelete={handleDelete}
             />
             <AddTransaction
                handleChange={handleChange}
                handleDelete={handleDelete}
                handleValue={handleValue}
             />
        </React.Fragment>
    )
}

export default Main;