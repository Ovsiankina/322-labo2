import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as mockData from '../../../mock-data.json';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  getComments(): Observable<any[]> {
    return of(mockData);
  }
}
