import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaveSpecsComponent } from './rave-specs.component';

describe('RaveSpecsComponent', () => {
  let component: RaveSpecsComponent;
  let fixture: ComponentFixture<RaveSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaveSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaveSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
