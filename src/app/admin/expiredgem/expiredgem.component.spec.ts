import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredgemComponent } from './expiredgem.component';

describe('ExpiredgemComponent', () => {
  let component: ExpiredgemComponent;
  let fixture: ComponentFixture<ExpiredgemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredgemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredgemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
