import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTaskComponent } from './observable-task.component';

describe('ObservableTaskComponent', () => {
  let component: ObservableTaskComponent;
  let fixture: ComponentFixture<ObservableTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
