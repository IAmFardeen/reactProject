import "./ExpenseForm.css";
import React,{useState} from "react";



function ExpenseForm(props) {
    const [titleChanged,setTitleChanged] = useState("");
    const [enterAmount,setAmountChanged]=useState("");
    const [enterDate,setDateChanged]=useState("");

      function titleChangeHandler(event){
                 setTitleChanged(event.target.value)
      };

      const amountChangeHandler=(event)=>{
              setAmountChanged(event.target.value)
      }
      const dateChangeHandler=(event)=>{
          setDateChanged(event.target.value);
    }

     const submitHandler=(event)=>{
             event.preventDefault();

        const eventData={
            title :titleChanged,
            amount:enterAmount,
            date: new Date(enterDate)
        }
         props.onSubmit(eventData)
       setTitleChanged("");
       setDateChanged("");
       setAmountChanged("");
     }


    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls ">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={titleChanged} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"  value={enterAmount} onChange={amountChangeHandler} min="0.01" step="0.01"></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enterDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"></input>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm;