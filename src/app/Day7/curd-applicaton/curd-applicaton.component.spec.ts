import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdApplicatonComponent } from './curd-applicaton.component';

describe('CurdApplicatonComponent', () => {
  let component: CurdApplicatonComponent;
  let fixture: ComponentFixture<CurdApplicatonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdApplicatonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdApplicatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
