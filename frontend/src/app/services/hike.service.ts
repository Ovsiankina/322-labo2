/**
 * Service responsible for managing hike-related data and API interactions.
 * Provides methods to fetch hike information from the backend server.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';

/**
 * Interface representing a hike object
 * @interface Hike
 * @property {number} id - Unique identifier for the hike
 * @property {string} hike_name - Name of the hike
 * @property {string} hike_difficulty - Difficulty level of the hike
 * @property {string} hike_distance - Distance of the hike
 * @property {string} hike_duration - Estimated duration of the hike
 * @property {string} hike_banner - URL of the hike's banner image
 * @property {string} avatar - URL of the hike's avatar image
 * @property {string} card_picture - URL of the hike's card image
 * @property {number|null} hike_note - Rating of the hike
 * @property {Object} hike_elevation - Elevation information
 * @property {number} hike_elevation.positive_elevation - Total positive elevation gain
 * @property {number} hike_elevation.negative_elevation - Total negative elevation gain
 * @property {Object} canton - Canton information
 * @property {string} canton.name - Name of the canton
 * @property {string} canton.badge - URL of the canton's badge image
 */
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

/**
 * @Injectable decorator that marks this class as available to be provided and injected as a dependency
 * @property {string} providedIn - Specifies that this service should be provided at the root level
 */
@Injectable({
  providedIn: 'root',
})
export class HikeService {
  /** Base URL for the API endpoints */
  private apiUrl = 'http://localhost:3000';

  /**
   * Creates an instance of HikeService
   * @param http - Angular HttpClient for making HTTP requests
   */
  constructor(private http: HttpClient) {
    console.log('HikeService initialized with API URL:', this.apiUrl);
  }

  /**
   * Retrieves all hikes from the API
   * @returns {Observable<Hike[]>} Observable of array of hike objects
   */
  getAllHikes(): Observable<Hike[]> {
    console.log('Fetching all hikes...');
    return this.http.get<Hike[]>(`${this.apiUrl}/hikes`).pipe(
      tap((hikes) => console.log('Received hikes:', hikes)),
      map((hikes) =>
        hikes.map((hike) => ({
          ...hike,
          id: +hike.id, // Convert ID to number
        }))
      )
    );
  }

  /**
   * Retrieves a specific hike by its ID
   * @param {number} id - The ID of the hike to retrieve
   * @returns {Observable<Hike>} Observable of the requested hike object
   */
  getHikeById(id: number): Observable<Hike> {
    console.log('Fetching hike with ID:', id);
    return this.http.get<Hike>(`${this.apiUrl}/hikes/${id}`).pipe(
      tap((hike) => console.log('Received hike:', hike)),
      map((hike) => ({
        ...hike,
        id: +hike.id, // Convert ID to number
      }))
    );
  }
}
