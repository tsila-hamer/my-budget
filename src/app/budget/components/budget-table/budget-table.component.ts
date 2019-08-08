import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { take, takeWhile } from 'rxjs/operators';

import { ExpensesList } from '../../models/expenses_list';
import { Expense } from './../../models/expense';
import { ICategory } from './../../models/category';
import { CategoriesList } from './../../models/categories_list';

import { BudgetService } from './../../services/budget-service.service';


@Component({
  selector: 'budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.css']
})
export class BudgetTableComponent implements OnInit {
  private alive: boolean;
  cat_subscription: Subscription;
  ex_subscription: Subscription;

  expensesList: ExpensesList;

  categoriesList: CategoriesList;
  categories: ICategory[];


  constructor(private budgetService: BudgetService) {
    this.cat_subscription = budgetService.getCategories().subscribe(
      categories => {
        this.categoriesList = categories ? categories : new CategoriesList();
        console.log(this.categoriesList);
    this.categories = this.categoriesList.categories;
      })
   }

  ngOnInit() {
    this.alive = true;
    timer(0, 60000)
      .pipe(
        takeWhile(() => this.alive)
      )
      .subscribe(() => {
        console.log('refreshing with timer');
        this.refreshList();
        ;
      });
  }

  ngOnDestroy(){
    this.alive = false;
    this.cat_subscription.unsubscribe();
    this.ex_subscription.unsubscribe();
  }

  
  refreshList(){
    this.ex_subscription = this.budgetService.getExpensesList().subscribe(
      expenses => {
        this.expensesList = expenses ? expenses : new ExpensesList();
        console.log(this.expensesList);
      });
  }

  
  delete(index: number){
    this.budgetService
    .removeFromList(index)
    .pipe(take(1))
    .subscribe(expenses => this.expensesList = expenses);
  }

  updateFields(expense_id) {
    this.budgetService
    .changeToUpdateMode(expense_id)
    .pipe(take(1))
    .subscribe(expenses => {this.expensesList = expenses;
      console.log(this.expensesList);});
  }

  updateExpense(expense_id: number,
      expense_date: string,
      category: ICategory,
      total_amt: number) {
    let ex_date_as_date = new Date(expense_date);
    let iso_date = ex_date_as_date.toISOString();
    this.budgetService
      .updateExpense(expense_id, iso_date, category, total_amt)
      .pipe(take(1))
      .subscribe(expenses => this.expensesList = expenses);
  }
  

  addNewExpense() {
    this.budgetService
   	.addToList()
   	.pipe(take(1))
     .subscribe(expenses => this.expensesList = expenses);
  }

  /*
  calcExpensesByCat() {
    let expensesByCat = {};
    for (let expense of this.expensesList) {
        let category = expense.category.category_name;
        if (category in expensesByCat) {
          expensesByCat[category] = expensesByCat[category] + expense.total_amt;
        }
        else {
          expensesByCat[category] = expense.total_amt; 
        }
      } 
      return expensesByCat;
    }
  
    getPieChartLabels() {
      return Object.keys(this.calcExpensesByCat());
    }

    getPieChartData() {
      return [
        { 
            data: Object.values(this.calcExpensesByCat())
        }
    ];
    }
    */
}
