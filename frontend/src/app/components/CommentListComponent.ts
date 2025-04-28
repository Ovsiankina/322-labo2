import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CommentService } from '../services/comment.service';
import { InsertionService } from '../services/insertion.service';
import { Subscription } from 'rxjs';
import { InsertionData } from '../models/insertion.model';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Liste des commentaires</mat-card-title>
        <mat-card-subtitle>Derniers commentaires ajoutés</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <mat-list>
          <mat-list-item *ngFor="let comment of comments">
            <div class="comment-item">
              <div class="comment-content">
                <p>{{ comment.body }}</p>
                <small>{{ comment.createdAt | date : 'medium' }}</small>
              </div>
              <div class="comment-meta">
                <mat-chip-set>
                  <mat-chip
                    *ngIf="comment.metadata?.priority === 'high'"
                    color="warn"
                    selected
                  >
                    <mat-icon>priority_high</mat-icon>
                    Priorité haute
                  </mat-chip>
                </mat-chip-set>
              </div>
            </div>
          </mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .comment-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .comment-content {
        flex: 1;
      }
      .comment-meta {
        margin-left: 16px;
      }
      mat-card {
        margin: 16px;
      }
    `,
  ],
})
export class CommentListComponent implements OnInit, OnDestroy {
  comments: any[] = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private commentService: CommentService,
    private insertionService: InsertionService
  ) {}

  ngOnInit() {
    // Charger les commentaires initiaux
    this.subscriptions.push(
      this.commentService.getComments().subscribe((data) => {
        this.comments = data;
      })
    );

    // Écouter les nouvelles insertions de commentaires
    this.subscriptions.push(
      this.insertionService.commentInsertions$.subscribe((insertion) => {
        this.handleCommentInsertion(insertion);
      })
    );

    // Écouter les insertions prioritaires
    this.subscriptions.push(
      this.insertionService.highPriorityInsertions$.subscribe((insertion) => {
        console.log('Insertion prioritaire détectée:', insertion);
      })
    );
  }

  private handleCommentInsertion(insertion: InsertionData) {
    switch (insertion.action) {
      case 'create':
        this.comments.unshift(insertion.data);
        break;
      case 'update':
        const index = this.comments.findIndex(
          (c) => c.id === insertion.data.id
        );
        if (index !== -1) {
          this.comments[index] = insertion.data;
        }
        break;
      case 'delete':
        this.comments = this.comments.filter((c) => c.id !== insertion.data.id);
        break;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
