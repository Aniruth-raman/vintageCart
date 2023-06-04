import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.scss'],
})
export class AddfeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  selectedFile!: File | null;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      like: ['', Validators.required],
      images: [''],
      name: [''],
      email: ['', Validators.email],
    });
  }
  uploadImage() {}
  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
