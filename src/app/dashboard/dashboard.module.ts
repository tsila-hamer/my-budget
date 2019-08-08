import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetPieChartComponent } from '../dashboard/components/budget-pie-chart/budget-pie-chart.component';

import { ChartsModule } from 'ng2-charts';
import { BudgetLineChartComponent } from './components/budget-line-chart/budget-line-chart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    BudgetPieChartComponent,
    BudgetLineChartComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    BudgetPieChartComponent,
    BudgetLineChartComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
