import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSharingStudentChildToParentComponent } from './data-sharing-student-child-to-parent.component';

describe('DataSharingStudentChildToParentComponent', () => {
  let component: DataSharingStudentChildToParentComponent;
  let fixture: ComponentFixture<DataSharingStudentChildToParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSharingStudentChildToParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSharingStudentChildToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
