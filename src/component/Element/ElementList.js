import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "../UI/Card";

function ElementList(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Changed");
        console.log(props.title);
        console.log("clicked");
    };

    return (
<div>  

    <Card className="expense-item">
      
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2 >{title}</h2>
            <div className="expense-item__price">RS.{props.amount}</div>
        </div>
        <button onClick={clickHandler}>
            Click Me
        </button>
    </Card>
    </div>)

}
export default ElementList;