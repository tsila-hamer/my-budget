import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'budget-line-chart',
  templateUrl: './budget-line-chart.component.html',
  styleUrls: ['./budget-line-chart.component.css']
})
export class BudgetLineChartComponent implements OnInit {
  @Input() totalAmtByDate;
  lineChartData;
  lineChartLabels;

  constructor() { }

  ngOnInit() {
    this.setChartValues();
  }

  ngOnChanges() {
    this.setChartValues();
  }

  setChartValues() {
    this.lineChartData = this.totalAmtByDate ? [
      { data: Object.values(this.totalAmtByDate),
         label: 'Total Amount Spent' },
      ] :
      undefined;
  
    this.lineChartLabels = this.totalAmtByDate ? 
      Object.keys(this.totalAmtByDate) :
      undefined;
  }
  
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: '#a0a5ab',
    },
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


}
