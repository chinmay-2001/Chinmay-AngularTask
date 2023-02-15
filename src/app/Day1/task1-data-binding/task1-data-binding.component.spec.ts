import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1DataBindingComponent } from './task1-data-binding.component';

describe('Task1DataBindingComponent', () => {
  let component: Task1DataBindingComponent;
  let fixture: ComponentFixture<Task1DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task1DataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task1DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
