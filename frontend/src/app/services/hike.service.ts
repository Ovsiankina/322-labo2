import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';

export interface Hike {
  id: number;
  hike_name: string;
  hike_difficulty: string;
  hike_distance: string;
  hike_duration: string;
  hike_banner: string;
  avatar: string;
  card_picture: string;
  hike_note: number | null;
  hike_elevation: {
    positive_elevation: number;
    negative_elevation: number;
  };
  canton: {
    name: string;
    badge: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class HikeService {
  private apiUrl = 'http://localhost:3000'; // URL de votre serveur JSON

  constructor(private http: HttpClient) {
    console.log('HikeService initialized with API URL:', this.apiUrl);
  }

  // Récupérer toutes les randonnées
  getAllHikes(): Observable<Hike[]> {
    console.log('Fetching all hikes...');
    return this.http.get<Hike[]>(`${this.apiUrl}/hikes`).pipe(
      tap((hikes) => console.log('Received hikes:', hikes)),
      map((hikes) =>
        hikes.map((hike) => ({
          ...hike,
          id: +hike.id, // Convertir l'ID en nombre
        }))
      )
    );
  }

  // Récupérer une randonnée par son ID
  getHikeById(id: number): Observable<Hike> {
    console.log('Fetching hike with ID:', id);
    return this.http.get<Hike>(`${this.apiUrl}/hikes/${id}`).pipe(
      tap((hike) => console.log('Received hike:', hike)),
      map((hike) => ({
        ...hike,
        id: +hike.id, // Convertir l'ID en nombre
      }))
    );
  }
}
