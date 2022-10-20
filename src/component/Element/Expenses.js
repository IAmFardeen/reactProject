import ElementList from "./ElementList";
import React,{useState} from "react";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";


function Expenses(props) {
  const [filteredYear, setFilter]=useState("2020")
    const yearChange=(dateValues)=>{
    setFilter(dateValues);
    }

    return (<Card className="expenses">
        <ExpenseFilter  value={filteredYear} onfilter={yearChange}></ExpenseFilter>
        {props.expenses.map((items)=>(
        <ElementList 
        title={items.title} 
        amount={items.amount} 
        date={items.date}>
        </ElementList>))}
       
      
    </Card>
    
    )

}

export default Expenses;