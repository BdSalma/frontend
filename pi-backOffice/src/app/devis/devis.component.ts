import { Component } from '@angular/core';
import { DevisService } from '../service/devis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent {
  listDeviss!:any;
  constructor(private devis:DevisService,private router:Router){}
  ngOnInit(): void {
    this.loadDeviss();
  }

  loadDeviss() {
    this.devis.getDevis().subscribe(
      (data) => {
        this.listDeviss = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteDevis(Id: number) {
    this.devis.DeleteDevis(Id).subscribe(
      () => {
        console.log('Offer deleted successfully.');
        // Actualiser la liste des offres après la suppression
        this.loadDeviss();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
