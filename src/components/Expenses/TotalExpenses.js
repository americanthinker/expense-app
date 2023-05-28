import './ExpensesFilter.css'

function TotalExpenses(props) {
    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Total Expeneses</label>
            <div className='total_sum'>{props.sum}</div>
          </div>
        </div>
      );
    }
    
export default TotalExpenses;