import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperoViewComponent } from './apero-view.component';

describe('AperoViewComponent', () => {
  let component: AperoViewComponent;
  let fixture: ComponentFixture<AperoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
