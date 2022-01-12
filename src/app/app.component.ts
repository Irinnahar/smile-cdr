import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './control-classes/question-base';
import JsonForm from '../assets/questionnaire.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'smile-cdr-angular';
  formData = JsonForm.item;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/assets/questionnaire.json').subscribe((formData: any) => {
      this.formData = formData;
    });
  }
}
