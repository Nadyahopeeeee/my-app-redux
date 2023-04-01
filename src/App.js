import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  return (
    <div className="App">
      <div style={{ fontSize: '30px', marginRight: '5px' }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div>{customer}</div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: '14px' }}>Клиенты отсутсвуют</div>
      )}
    </div>
  );
}

export default App;
