import { Expense } from './expense';

export class ExpensesList {
	expenses_list: {expenses: Expense[],
					totalAmt: number,
					amtByCat: any};

    /*if gets expenses list as a parameter, initialize this.expenses_list['expenses] 
    to be this list. else, initialize it to an empty list*/
	constructor(private expensesList?: {expenses: Expense[],
										totalAmt: number,
										amtByCat: any}) {
		this.expenses_list = expensesList ?
		expensesList
		: {expenses: [],
		   totalAmt: 0,
		   amtByCat: {}}
	}

	get expenses(): Expense[] {
		return this.expenses_list['expenses'];
	}

	get totalExpensesAmt(): number {
		return this.expenses_list['totalAmt'];
	}

	get amtByCat(): any {
		return this.expenses_list['amtByCat'];
	}

	/*
	get totalExpensesAmt(): number {
 		let sum = 0;
 		for (let expense of this.expenses_list['expenses']) 
 			sum += expense.total_amt;
 		return sum;
	}

	get totalExpensesNum(): number {
		return this.expenses_list['expenses'].length;
	}
	*/
}