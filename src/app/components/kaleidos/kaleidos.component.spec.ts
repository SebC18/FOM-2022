import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaleidosComponent } from './kaleidos.component';

describe('KaleidosComponent', () => {
  let component: KaleidosComponent;
  let fixture: ComponentFixture<KaleidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaleidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaleidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
