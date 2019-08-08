import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TotalBudgetComponent } from './components/total-budget/total-budget.component';
import { BudgetTableComponent } from './components/budget-table/budget-table.component';
import { BudgetPieChartComponent } from './components/budget-pie-chart/budget-pie-chart.component';

import { BudgetService } from './services/budget-service.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ErrorStateMatcher } from '@angular/material/core';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    TotalBudgetComponent,
    BudgetTableComponent,
    BudgetPieChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule ,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule,
    HttpClientModule
    /*,
    RouterModule.forChild([
    	{path: 'printer_queue/new', component: JobItemComponent},
    	{path: 'printer_queue', component: JobsQueueComponent}])*/
  ],
  exports: [
    TotalBudgetComponent,
    BudgetTableComponent,
    BudgetPieChartComponent
    ],
  providers:[
    BudgetService,
    MatDatepickerModule,
    ErrorStateMatcher
  ]
})
export class BudgetModule { }
