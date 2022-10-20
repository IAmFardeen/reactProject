
import "./ExpenseFilter.css"

function ExpenseFilter(props){
  const changing = (event)=>{
    props.onfilter(event.target.value);

  }

    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.value} onChange={changing}>
              <option value='2022'>2022</option>
             <option value='2019'>2019</option>
            </select>
          </div>
        </div>
      );
}
export default ExpenseFilter;