import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import visibleExpenses from '../selectors/expenses.js';
import totalExpenses from '../selectors/expenses-total.js';

const ExpensesSummary = ({ expenseCount, expensesTotal, totalExpenseCount }) => {
	const filteredExpenseCount = totalExpenseCount - expenseCount;
	const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
	const amount = numeral(expensesTotal / 100).format('$0,0.00');
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{amount}</span>
				</h1>
				{ 	filteredExpenseCount === 0 ? 
					<h3 className="page-header__title">Showing all expenses.</h3> : 
					<h3 className="page-header__title">Not showing <span>{filteredExpenseCount}</span> expenses because of filters.</h3> 
				}
				<div className="page-header__actions">
					<Link className="button" to="/create">Add Expense</Link>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		expenseCount: visibleExpenses(state.expenses, state.filters).length,
		expensesTotal: totalExpenses(visibleExpenses(state.expenses, state.filters)),
		totalExpenseCount: state.expenses.length
	}
}

export default connect(mapStateToProps)(ExpensesSummary);