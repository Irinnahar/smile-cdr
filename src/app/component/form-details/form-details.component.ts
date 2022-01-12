import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css'],
})
export class FormDetailsComponent implements OnInit {
  @Input() formValue: any;

  constructor() {}

  ngOnInit(): void {}
}
