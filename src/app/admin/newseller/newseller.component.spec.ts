import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsellerComponent } from './newseller.component';

describe('NewsellerComponent', () => {
  let component: NewsellerComponent;
  let fixture: ComponentFixture<NewsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
