import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperoNextComponent } from './apero-next.component';

describe('AperoNextComponent', () => {
  let component: AperoNextComponent;
  let fixture: ComponentFixture<AperoNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperoNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperoNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
