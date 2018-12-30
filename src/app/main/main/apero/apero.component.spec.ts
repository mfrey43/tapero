import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperoComponent } from './apero.component';

describe('AperoComponent', () => {
  let component: AperoComponent;
  let fixture: ComponentFixture<AperoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
