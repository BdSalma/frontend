import { Component, OnInit } from '@angular/core';
import { OfferService } from '../service/offer.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
  averageOffersPerDay:any;
  OffreEnAttente:any;
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getAverageOffersPerDay().subscribe(
      average => {
        this.averageOffersPerDay = average;
        this.plotChart();
      },
      error => {
        console.log('Error fetching average offers per day:', error);
      }
    );
    this.offerService.getNbAcceptedOffer().subscribe(
      average => {
        this.OffreEnAttente = average;
      },
      error => {
        console.log('Error fetching average offers per day:', error);
      }
    );
  }

  plotChart(): void {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!; // Add non-null assertion operator
  
    const data = {
      labels: ['Average Offers per Day'],
      datasets: [{
        label: 'Average Offers per Day',
        data: [this.averageOffersPerDay],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1
      }]
    };
  
    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };
  
    new Chart(ctx, {
      type: 'pie', // Change chart type to pie
      data: data,
      options: options
    });
  }
  
}
