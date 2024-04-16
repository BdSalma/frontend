import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../service/offer.service';
import { RequestSupplyService } from 'src/app/service/request-supply.service';
import { Authentication } from 'src/app/service/authentication.service';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {
  averageOffersPerDay:any;
  OffreEnAttente:any;
  individuStatistics: any;
  societyStat:any;
  user!: any;

  constructor(private consumer: Authentication,private offerService: OfferService, private requestSupplyService: RequestSupplyService) { }

  ngOnInit(): void {
    this.user = this.consumer.user;

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
    this.requestSupplyService.getIndividuStatistics().subscribe(
      individuStatistics => {
        this.individuStatistics = individuStatistics;
        this.pieChartForIndividus();
        console.log(individuStatistics)
      },
      error => {
        console.error('Error fetching individu statistics:', error);
      }
    );
    this.requestSupplyService.getSocietyStatistics().subscribe(
      societyStat => {
        this.societyStat = societyStat;
        this.pieChartForSociety();
        console.log(societyStat)
      },
      error => {
        console.error('Error fetching society statistics:', error);
      }
    );
  }
  pieChartForIndividus(): void {
    const canvas = document.getElementById('individuChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!; // Add non-null assertion operator
  
    const data = {
      labels: ['Running Requests', 'Accepted Devis', 'Refused Devis', 'Accepted Invoices', 'Refused Invoices'],
      datasets: [{
        label: ' Statistics',
        data: [
          this.individuStatistics['RunningRequests'],
          this.individuStatistics['AcceptedDevis'],
          this.individuStatistics['RefusedDevis'],
          this.individuStatistics['AcceptedInvoices'],
          this.individuStatistics['RefusedInvoices']
        ],
        backgroundColor: [
          '#e63946', 
          '#fb8500', 
          '#ffb703', 
          '#023047', 
          '#219ebc', 
          '#8ecae6', 
          '#9e2a2b', 
          '#335c67' 
            ],
        
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
      type: 'pie',
      data: data,
      options: options
    });
  }
  pieChartForSociety(): void {
    const canvas = document.getElementById('societyChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!; // Add non-null assertion operator
  
    const data = {
      labels: ['Accepted Devis', 'Refused Devis', 'Accepted Invoices', 'Refused Invoices'],
      datasets: [{
        label: '  Statistics',
        data: [
          this.societyStat['AcceptedDevis'],
          this.societyStat['RefusedDevis'],
          this.societyStat['AcceptedInvoices'],
          this.societyStat['RefusedInvoices']
        ],
        backgroundColor: [
          '#e63946',
          '#fb8500',
          '#ffb703',
          '#023047',
          '#219ebc',
          '#8ecae6',
          '#9e2a2b',
          '#335c67',
        ]
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
      type: 'pie',
      data: data,
      options: options
    });
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
