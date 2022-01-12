import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import JsonForm from '../../../assets/questionnaire.json';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Item } from 'src/app/shared/form.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
  @Input() jsonFormData: any;

  // dynamicFormArray: any;
  // questionForm = JsonForm.item;
  formValue: any;
  public myForm: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['jsonFormData'].firstChange) {
      this.createForm(this.jsonFormData.item);
    }
  }
  ngOnInit(): void {
    // this.myForm = this.fb.group({});
    // this.createForm(this.questionForm);
  }
  createForm(controls: any) {
    for (let control of controls) {
      const validatorsToAdd = [];
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.myForm.addControl(
        control.text,
        this.fb.control(control.value, validatorsToAdd)
      );
    }
    console.log(this.myForm.valid);
  }

  submitForm() {
    this.formValue = JSON.stringify(this.myForm.value, null, 4);
  }
}
