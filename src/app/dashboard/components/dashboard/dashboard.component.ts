import { Component, OnInit, Input } from '@angular/core';
import { ExpensesList } from './../../../budget/models/expenses_list';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() expenses_list: ExpensesList; 

  // totalAmtByCat;
  // totalAmtByDate;

  constructor() { }

  ngOnInit() {
  }

}
