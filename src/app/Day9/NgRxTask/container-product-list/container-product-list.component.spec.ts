import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProductListComponent } from './container-product-list.component';

describe('ContainerProductListComponent', () => {
  let component: ContainerProductListComponent;
  let fixture: ComponentFixture<ContainerProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
