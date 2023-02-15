import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2EventBindingComponent } from './task2-event-binding.component';

describe('Task2EventBindingComponent', () => {
  let component: Task2EventBindingComponent;
  let fixture: ComponentFixture<Task2EventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task2EventBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task2EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
