import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyComponent } from './fly.component';

describe('FlyComponent', () => {
  let component: FlyComponent;
  let fixture: ComponentFixture<FlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
