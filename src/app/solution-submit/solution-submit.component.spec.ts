import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionSubmitComponent } from './solution-submit.component';

describe('SolutionSubmitComponent', () => {
  let component: SolutionSubmitComponent;
  let fixture: ComponentFixture<SolutionSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
