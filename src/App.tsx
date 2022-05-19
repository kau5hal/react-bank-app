import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {RootState} from "./app/store";
import {DEPOSIT, WITHDRAW} from "./features/accountSlice";

function App() {
  const [input, setInput] = useState("");

  const account = useSelector((state:RootState) => state.account);

  const dispatch = useDispatch();

  const addDeposit = () => {
    if (!input) return
    dispatch(DEPOSIT(parseInt(input)))
  }

  const withDraw = () => {
    if (!input) return
    dispatch(WITHDRAW(parseInt(input)))
  }

  console.log("account",account);
  return (
    <div className="main-container">
      <div className="sub-container">
        <span>{account}</span>
        <input 
          value={input}
          type="number"
          onChange={(e) => {
            if(e.target.value && parseInt(e.target.value) >= 0){
              setInput(e.target.value)
            }
          }}
        />
        <div className="button-container">
          <button role={`button`} onClick={addDeposit}>DEPOSIT</button>
          <button role={`button`} onClick={withDraw}>WITHDRAW</button>
        </div>  
      </div>
    </div>
  );
}

export default App;
