import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTaskComponent } from './rxjs-task.component';

describe('RxjsTaskComponent', () => {
  let component: RxjsTaskComponent;
  let fixture: ComponentFixture<RxjsTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
