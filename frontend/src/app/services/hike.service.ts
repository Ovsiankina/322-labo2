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
 * @property {number} id
 * @property {string} hike_name
 * @property {string} hike_difficulty
 * @property {string} hike_distance
 * @property {string} hike_duration
 * @property {string} hike_banner
 * @property {string} avatar
 * @property {string} card_picture
 * @property {number|null} hike_note
 * @property {Object} hike_elevation
 * @property {number} hike_elevation.positive_elevation
 * @property {number} hike_elevation.negative_elevation
 * @property {Object} canton
 * @property {string} canton.name
 * @property {string} canton.badge
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
  constructor(private http: HttpClient) {}

  /**
   * Retrieves all hikes from the API
   * @returns {Observable<Hike[]>} Observable of array of hike objects
   */
  getAllHikes(): Observable<Hike[]> {
    return this.http.get<Hike[]>(`${this.apiUrl}/hikes`).pipe(
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
    return this.http.get<Hike>(`${this.apiUrl}/hikes/${id}`).pipe(
      map((hike) => ({
        ...hike,
        id: +hike.id, // Convert ID to number
      }))
    );
  }
}
