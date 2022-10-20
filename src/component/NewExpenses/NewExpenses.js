
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpenses(props){
    const submitHandler = (eventDatas)=>{
         const eventData={
            ...eventDatas,
            id:2,
         }
         
    props.onSubmits(eventData);
    
    }
    return(<div className="new-expense ">  
        <ExpenseForm onSubmit={submitHandler}></ExpenseForm> 
    </div>);
}
export default NewExpenses;