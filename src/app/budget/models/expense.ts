import { ICategory } from './../models/category';

export interface IExpense {
    expense_id: number;
    expense_date: string;
    category: ICategory;
    total_amt: number;
    update_mode: boolean;
}

export class Expense implements IExpense {
    expense_id: number;
    expense_date: string;
    category: ICategory;
    total_amt: number;
    update_mode: boolean;

    constructor() {
		this.update_mode = false;
	}
}