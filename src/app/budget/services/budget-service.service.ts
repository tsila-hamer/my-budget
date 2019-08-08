import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { take, map } from 'rxjs/operators';

import { ExpensesList } from './../models/expenses_list';
import { Expense } from './../models/expense';
import { CategoriesList } from './../models/categories_list';
import { ICategory } from './../models/category';

/*
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
*/

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
    domainUrl: string = 'http://127.0.0.1:5000';

  constructor(private _http: HttpClient) {
  }

  getCategories(): Observable<CategoriesList> {
        return this._http
        .get<CategoriesList>(this.domainUrl + '/categories');
	}

  getExpensesList(): Observable<ExpensesList> {
        return this._http
        .get<ExpensesList>(this.domainUrl + '/expenses');
  }
  
  addToList(): Observable<ExpensesList> {
        return this._http
        .post<ExpensesList>(this.domainUrl + '/insert_expense', {});
  }

  updateExpense(expense_id: number,
                expense_date: string,
                category: ICategory,
                total_amt: number): Observable<ExpensesList> {
        return this._http
        .put<ExpensesList>(this.domainUrl + '/edit_expense/' + expense_id +
            '/' + expense_date + '/' + category.category_id + '/' + total_amt, {});		
    }

  changeToUpdateMode(expense_id: number): Observable<ExpensesList> {
        return this._http
        .put<ExpensesList>(this.domainUrl + '/change_to_edit/' + expense_id, {});
	}
    
  removeFromList(index: number): Observable<ExpensesList> {
        return this._http
        .delete<ExpensesList>(this.domainUrl + '/delete_expense/' + index, {});
    }
  
    /*
	totalNum(): number {
		return this.expenses.totalExpensesNum;
    }
    */

}
