import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddfeedbackComponent } from '../addfeedback/addfeedback.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  constructor(private dialog: MatDialog) {}
  addFeedback(): void {
    this.dialog.open(AddfeedbackComponent, {
      width: '30%',
    });
  }
}
