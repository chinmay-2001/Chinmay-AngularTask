import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFRagistrationComponent } from './tdfragistration.component';

describe('TDFRagistrationComponent', () => {
  let component: TDFRagistrationComponent;
  let fixture: ComponentFixture<TDFRagistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDFRagistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDFRagistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
