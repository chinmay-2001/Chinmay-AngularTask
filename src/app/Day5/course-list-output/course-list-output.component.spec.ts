import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListOutputComponent } from './course-list-output.component';

describe('CourseListOutputComponent', () => {
  let component: CourseListOutputComponent;
  let fixture: ComponentFixture<CourseListOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseListOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
