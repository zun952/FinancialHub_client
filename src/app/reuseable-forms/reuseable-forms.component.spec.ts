import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableFormsComponent } from './reuseable-forms.component';

describe('ReuseableFormsComponent', () => {
  let component: ReuseableFormsComponent;
  let fixture: ComponentFixture<ReuseableFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuseableFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuseableFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
