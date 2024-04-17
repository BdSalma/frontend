import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../service/offer.service';
import { Chart, registerables } from 'node_modules/chart.js';
import { Category } from 'src/app/model/category';
Chart.register(...registerables);

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css'],
})
export class DashboradComponent implements OnInit {
  averageOffersPerDay: any;
  listOffer!: any;
  OffreEnAttente: any;
  categoryOptions: string[] = Object.keys(Category).filter((key: any) => !isNaN(Number(Category[key])));
  categoryCounts: any; // Variable to store category counts from the backend
  candidatCounts: any;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getNbAcceptedOffer().subscribe(
      (average) => {
        this.OffreEnAttente = average;
      },
      (error) => {
        console.log('Error fetching average offers per day:', error);
      }
    );
    this.fetchCategoryCounts();
    this.loadOffers(); // Load offers before fetching candidature counts and rendering the chart
  }

  fetchCategoryCounts() {
    this.offerService.getOfferCountsByCategory().subscribe(
      (data: any) => {
        this.categoryCounts = data; // Assign fetched data to categoryCounts variable
        this.PieChartOfferByCategory(); // Call method to render pie chart with fetched data
      },
      (error: any) => {
        console.error('Error fetching category counts:', error);
      }
    );
  }

  fetchCandidatureCounts() {
    if (!this.listOffer) {
      // If listOffer is not populated, return or handle accordingly
      return;
    }
  
    this.offerService.getCandidaturesByOffer().subscribe(
      (data: any) => {
        // Extract offer names and candidature counts from the response object
        const offerNames = Object.keys(data);
        const candidatureCounts = Object.values(data) as number[];
        this.PieChartCandidat(offerNames, candidatureCounts);
      },
      (error: any) => {
        console.error('Error fetching candidat counts:', error);
      }
    );
  }
  

  PieChartOfferByCategory() {
    const myChartOfUsers = new Chart('pie-chart-offer', {
      type: 'pie',
      data: {
        labels: this.categoryOptions,
        datasets: [{
          backgroundColor: [
            '#e63946',
            '#fb8500',
            '#ffb703',
            '#023047',
            '#219ebc',
            '#8ecae6',
          ],
          data: this.categoryOptions.map(option => this.categoryCounts[option] || 0), // Use category counts data here
          label: 'Offre par catégorie',
        }],
      },
      options: {
        responsive: true,
      },
    });
  }

  PieChartCandidat(offerNames: string[], candidatureCounts: number[]) {

    const myChartOfCandidat = new Chart('pie-chart', {
      type: 'pie',
      data: {
        labels: offerNames,
        datasets: [{
          backgroundColor: [
            '#e63946',
            '#fb8500',
            '#ffb703',
            '#023047',
            '#219ebc',
            '#8ecae6',
          ],
          data: candidatureCounts,
          label: 'Candidatures par offre',
        }],
      },
      options: {
        responsive: true,
      },
    });
  }  

  loadOffers() {
    this.offerService.getOffers().subscribe(
      (data) => {
        this.listOffer = data;
        this.fetchCandidatureCounts(); // Call fetchCandidatureCounts once listOffer is populated
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
