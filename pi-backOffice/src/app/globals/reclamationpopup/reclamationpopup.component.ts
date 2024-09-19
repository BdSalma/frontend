import { Component, Input, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-reclamationpopup',
  templateUrl: './reclamationpopup.component.html',
  styleUrls: ['./reclamationpopup.component.css']
})
export class ReclamationpopupComponent {

  @Input() nega!: number;
  @Input() pos!: number;
  @Input() neu!: number;
  @Input() reclamation: any;
  @Input() result: any;
  dataList: number[] = [this.nega, this.neu, this.pos];


  ngOnInit() {
    this.PieChart(this.dataList);
  }
  ngOnChanges(changes: SimpleChanges) {
    // Check if the input properties have changed
    if (changes['nega'] || changes['neu'] || changes['pos']) {
      // Update the dataList variable with the new values
      this.dataList = [changes['nega'].currentValue, changes['neu'].currentValue, changes['pos'].currentValue];
      // Call PieChart function passing the updated dataList variable
      this.PieChart(this.dataList);
    }
  }

  closeDialog() {

    const modelDiv = document.getElementById('popup1');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }



  PieChart(dataList: number[]) {
    const backgroundColors = [
      '#e63946',
      '#fb8500',
      '#8ecae6'
    ];
  
    // Destroy existing Chart instance if it exists
    const existingChart = Chart.getChart('pie-chart');
    if (existingChart) {
      existingChart.destroy();
    }
  
    // Create new Chart instance
    const myChartOfUsers = new Chart('pie-chart', {
      type: 'pie',
      data: {
        labels: ["Negative", "Neutre", "Positive"],
        datasets: [
          {
            backgroundColor: backgroundColors,
            data: dataList,
            label: ' Nombre',
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  }
  
}
