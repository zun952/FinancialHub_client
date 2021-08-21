import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reuseable-forms',
  templateUrl: './reuseable-forms.component.html',
  styleUrls: ['./reuseable-forms.component.scss']
})
export class ReuseableFormsComponent {
  chartForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.chartForm = this.formBuilder.group({
      coin: []
    });
  }

  submit(){
    console.log(this.chartForm.value);
  }
}
