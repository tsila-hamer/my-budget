import { Component, OnInit, Input } from '@angular/core';

import { BudgetService } from './../../services/budget-service.service';

@Component({
  selector: 'total-budget',
  templateUrl: './total-budget.component.html',
  styleUrls: ['./total-budget.component.css']
})
export class TotalBudgetComponent implements OnInit {
  @Input() totalAmt: number;
  totalBudget: number = 1000;
  edit: boolean = false;

  constructor() { 
  }

  ngOnInit() {
  }

  
}
