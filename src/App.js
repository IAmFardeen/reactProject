
import Expenses from "./component/Element/Expenses";
import NewExpenses from "./component/NewExpenses/NewExpenses";
import React, {useState} from "react";
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];




function App() {
  
  const [inp,setInp] = useState(expenses)

  const parentTochild=data=>{
       setInp(prev=>{
       return [data,...prev];
       })

  }
  
  return (
    <div>
      <NewExpenses onSubmits={parentTochild}></NewExpenses>
     <Expenses expenses={inp}></Expenses>


    </div>

  );
}

export default App;
