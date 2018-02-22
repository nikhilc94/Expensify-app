import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import visibleExpenses from '../selectors/expenses.js';
import totalExpenses from '../selectors/expenses-total.js';

const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
	const amount = numeral(expensesTotal / 100).format('$0,0.00');
	return (
		<div>
			<h1>{`Viewing ${expenseCount} ${expenseWord} totalling ${amount}`}</h1>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		expenseCount: visibleExpenses(state.expenses, state.filters).length,
		expensesTotal: totalExpenses(visibleExpenses(state.expenses, state.filters))
	}
}

export default connect(mapStateToProps)(ExpensesSummary);