import { Component } from '@angular/core';
import { Residence } from '../residence.model';
import { Apartment } from '../apartment.model';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: 'assets/R1.jpeg' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: 'assets/R2.jpg' },
    { id: 3, name: 'El Arij', address: 'Rades', image: 'assets/R3.jpg' },
    { id: 4, name: 'El Anber', address: 'Manzah 5', image: 'assets/R4.jpg' },
  ];
  listApartments: Apartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'AppartementS+1',
      residence: this.listResidences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S+2',
      description: 'AppartementS+2',
      residence: this.listResidences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S+3',
      description: 'AppartementS+3',
      residence: this.listResidences[1],
    },
  ];

  selectedR_A: Apartment[] = [];
  favoriteA: Apartment[] = [];
  surfaceFilter: number | null = null;
  selectedR: Residence | null = null;
  noA: boolean = false;
  searchSurface: number | null = null;
  filteredA: Apartment[] = [];

  showApartments(residence: Residence): void {
    this.selectedR = residence;
    this.selectedR_A = this.listApartments.filter(
      (apartment) => apartment.residence === residence
    );
    this.filteredA = this.selectedR_A;
    this.noA = this.selectedR_A.length === 0;
  }

  addToFavorites(apartment: Apartment): void {
    const isAlreadyInFavorites = this.favoriteA.some(
      (favApartment) => favApartment.id === apartment.id
    );

    if (!isAlreadyInFavorites) {
      this.favoriteA.push(apartment);
    }
  }

  filterA(): void {
    if (this.searchSurface !== null) {
      this.filteredA = this.selectedR_A.filter(
        (apartment) => apartment.surface === this.searchSurface
      );
    } else {
      this.filteredA = this.selectedR_A;
    }
  }
}