import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperoCreateComponent } from './apero-create.component';

describe('AperoCreateComponent', () => {
  let component: AperoCreateComponent;
  let fixture: ComponentFixture<AperoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
