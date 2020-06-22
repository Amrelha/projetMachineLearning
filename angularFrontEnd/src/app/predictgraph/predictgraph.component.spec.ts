import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictgraphComponent } from './predictgraph.component';

describe('PredictgraphComponent', () => {
  let component: PredictgraphComponent;
  let fixture: ComponentFixture<PredictgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
