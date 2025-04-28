import { Injectable } from '@angular/core';
import {
  Subject,
  Observable,
  BehaviorSubject,
  filter,
  map,
  distinctUntilChanged,
} from 'rxjs';
import { InsertionData } from '../models/insertion.model';

@Injectable({
  providedIn: 'root',
})
export class InsertionService {
  private insertionSubject = new Subject<InsertionData>();
  private insertionHistory = new BehaviorSubject<InsertionData[]>([]);
  private readonly MAX_HISTORY = 100;

  // Observables publics
  insertion$ = this.insertionSubject.asObservable();
  insertionHistory$ = this.insertionHistory.asObservable();

  // Filtres spécifiques
  commentInsertions$ = this.insertion$.pipe(
    filter((data) => data.type === 'comment'),
    distinctUntilChanged()
  );

  highPriorityInsertions$ = this.insertion$.pipe(
    filter((data) => data.metadata?.priority === 'high'),
    distinctUntilChanged()
  );

  // Méthodes d'émission
  emitInsertion(data: Omit<InsertionData, 'timestamp'>) {
    const insertion: InsertionData = {
      ...data,
      timestamp: new Date(),
      id: this.generateUniqueId(),
    };

    this.insertionSubject.next(insertion);
    this.updateHistory(insertion);
  }

  // Méthodes de filtrage
  getInsertionsByType(type: InsertionData['type']): Observable<InsertionData> {
    return this.insertion$.pipe(
      filter((data) => data.type === type),
      distinctUntilChanged()
    );
  }
  getInsertionsByPriority(
    priority: NonNullable<InsertionData['metadata']>['priority']
  ): Observable<InsertionData> {
    return this.insertion$.pipe(
      filter((data) => data.metadata?.priority === priority),
      distinctUntilChanged()
    );
  }

  // Méthodes d'historique
  private updateHistory(insertion: InsertionData) {
    const currentHistory = this.insertionHistory.value;
    const newHistory = [insertion, ...currentHistory].slice(
      0,
      this.MAX_HISTORY
    );
    this.insertionHistory.next(newHistory);
  }

  getHistory(): Observable<InsertionData[]> {
    return this.insertionHistory$;
  }

  clearHistory() {
    this.insertionHistory.next([]);
  }

  // Utilitaires
  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  // Nettoyage
  ngOnDestroy() {
    this.insertionSubject.complete();
    this.insertionHistory.complete();
  }
}
