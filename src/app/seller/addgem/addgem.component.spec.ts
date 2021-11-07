import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgemComponent } from './addgem.component';

describe('AddgemComponent', () => {
  let component: AddgemComponent;
  let fixture: ComponentFixture<AddgemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
