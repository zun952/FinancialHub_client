import { Component, } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { multi } from "./data";

@Component({
  selector: 'app-chart-form',
  templateUrl: './chart-form.component.html',
  styleUrls: ['./chart-form.component.scss']
})
export class ChartFormComponent{
  form: FormGroup;

  multi: any[] = [];
  view: any[] = [700, 300];

  //options
  legend: boolean = true;
  showLabels: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'TIME';
  yAxisLabel: string = 'COST';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB']
  };

  constructor(private formBuilder: FormBuilder) {
    Object.assign(this, { multi });

    this.form = this.formBuilder.group({
      coin: []
    });
  }

  onSelect(data: string): void {
    console.log('Clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: string): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: string): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
