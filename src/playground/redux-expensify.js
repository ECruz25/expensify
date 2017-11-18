import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Store Creation

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
const expenseOne = store.dispatch(
  addExpense({ description: 'rent', amount: 1040, createdAt: -1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'cofee', amount: 300, createdAt: 1000 })
);
// store.dispatch(removeExpense({ id: expenseThree.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 1500 }));
// store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
  expenses: [
    {
      id: 'aasdas',
      description: 'January Rent',
      note: 'final payment for that address',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
