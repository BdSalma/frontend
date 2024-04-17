import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../service/offer.service';
import { Chart, registerables } from 'node_modules/chart.js';
import { Authentication } from 'src/app/service/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { ReclamationService } from 'src/app/service/reclamation.service';
Chart.register(...registerables);
@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css'],
})
export class DashboradComponent implements OnInit {
  averageOffersPerDay: any;
  OffreEnAttente: any;
  usersRole: String[] = [];
  usersCount: number[] = [];
  constructor(
    private offerService: OfferService,
    private consumer: Authentication,
    private toastr: ToastrService,
    private reclamationService : ReclamationService
  ) {}

  ngOnInit(): void {
    this.offerService.getAverageOffersPerDay().subscribe(
      (average) => {
        this.averageOffersPerDay = average;
        this.plotChart();
      },
      (error) => {
        console.log('Error fetching average offers per day:', error);
      }
    );
    this.offerService.getNbAcceptedOffer().subscribe(
      (average) => {
        this.OffreEnAttente = average;
      },
      (error) => {
        console.log('Error fetching average offers per day:', error);
      }
    );
    this.PieChartForUsers();
    this.PieChartForReclamation();

  }

  plotChart(): void {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!; // Add non-null assertion operator

    const data = {
      labels: ['Average Offers per Day'],
      datasets: [
        {
          label: 'Average Offers per Day',
          data: [this.averageOffersPerDay],
          backgroundColor: ['rgba(75, 192, 192, 0.2)'],
          borderColor: ['rgba(75, 192, 192, 1)'],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    new Chart(ctx, {
      type: 'pie', // Change chart type to pie
      data: data,
      options: options,
    });
  }

  PieChartForUsers() {
    this.consumer.getCountUsersByRole().subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        const roles = Object.keys(response);
        const counts = Object.values(response);
        const backgroundColors = [
          '#e63946',
          '#fb8500',
          '#ffb703',
          '#023047',
          '#219ebc',
          '#8ecae6',
          '#9e2a2b',
          '#335c67',
        ];
        const myChartOfUsers = new Chart('pie-chart', {
          type: 'pie',
          data: {
            labels: roles,
            datasets: [
              {
                backgroundColor: backgroundColors,
                data: counts,
                label: ' Nombre',
              },
            ],
          },
          options: {
            responsive: true,
          },
        });
      },
      error: () => {
        this.toastr.error('Something went wrong');
      },
    });
  }
  
  PieChartForReclamation() {
    this.reclamationService.getCountReclamationByType().subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        const roles = Object.keys(response);
        const counts = Object.values(response);
        const backgroundColors = [
          '#e63946',
          '#fb8500',
        ];
        const myChartOfUsers = new Chart('reclamation-chart', {
          type: 'pie',
          data: {
            labels: roles,
            datasets: [
              {
                backgroundColor: backgroundColors,
                data: counts,
                label: ' Nombre',
              },
            ],
          },
          options: {
            responsive: true,
          },
        });
      },
      error: (er) => {
        console.log("sdas");
        
      },
    });
  }
}
