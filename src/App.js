import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReduser';
import { addCashAction, getCashAction } from './store/cashReduser';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
    console.log(customer.id);
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button style={{ marginLeft: '5px' }} onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <div style={{ fontSize: '30px' }}>Баланс: {cash}</div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button style={{ marginLeft: '5px' }}>Удалить клиента</button>
        <div>
          {customers.length > 0 ? (
            <div style={{ fontSize: '30px' }}>
              {customers.map((customer) => (
                <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
              ))}
            </div>
          ) : (
            <div style={{ fontSize: '30px' }}>Клиенты отсутсвуют!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
