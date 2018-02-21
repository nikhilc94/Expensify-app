

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			];

		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if(action.id === expense.id)
					return {
						...expense,
						...action.updates
					};
				else 
					return expense;
			});

		case 'REMOVE_EXPENSE':
			return state.filter(expense => action.id !== expense.id);
		default:
			return state;
	}
};

