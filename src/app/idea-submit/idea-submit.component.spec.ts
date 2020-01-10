import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaSubmitComponent } from './idea-submit.component';

describe('IdeaSubmitComponent', () => {
  let component: IdeaSubmitComponent;
  let fixture: ComponentFixture<IdeaSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
