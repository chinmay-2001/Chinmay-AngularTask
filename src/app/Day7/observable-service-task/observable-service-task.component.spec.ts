import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableServiceTaskComponent } from './observable-service-task.component';

describe('ObservableServiceTaskComponent', () => {
  let component: ObservableServiceTaskComponent;
  let fixture: ComponentFixture<ObservableServiceTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableServiceTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableServiceTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
