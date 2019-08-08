import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Expense } from './../../models/expense';

@Component({
  selector: 'budget-pie-chart',
  templateUrl: './budget-pie-chart.component.html',
  styleUrls: ['./budget-pie-chart.component.css']
})
export class BudgetPieChartComponent implements OnInit, OnChanges {
  @Input() totalAmtByCat;
  
  pieChartLabels = this.totalAmtByCat ? 
    Object.keys(this.totalAmtByCat) :
    undefined;
    
  pieChartData = this.totalAmtByCat ?
    [
    {data: Object.values(this.totalAmtByCat)}
    ] :
    undefined;
  // @Input() pieChartLabels: string[] = ['a'];
  // @Input() pieChartData: any = [
  //   {data: [1]}
  //   ];
  

  constructor() {
   }

  ngOnInit() {
  }

  ngOnChanges() {
    this.pieChartLabels = this.totalAmtByCat ? 
    Object.keys(this.totalAmtByCat) :
    undefined;
    
    this.pieChartData = this.totalAmtByCat ?
    [
    {data: Object.values(this.totalAmtByCat)}
    ] :
    undefined;
    console.log(this.pieChartData)
  }

  pieChartOptions = {
    responsive: true
  }

  //pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

  // CHART COLOR.
  pieChartColor:any = [
      {
          backgroundColor: ['rgba(30, 169, 224, 0.8)',
          'rgba(255,165,0,0.9)',
          'rgba(139, 136, 136, 0.9)',
          'rgba(255, 161, 181, 0.9)',
          'rgba(255, 102, 0, 0.9)'
          ]
      }
  ]

  /*
  pieChartData: any = [
    {data: [120, 130, 180, 70, 90]}
    ]
    */
}
