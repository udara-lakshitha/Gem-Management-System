import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgemComponent } from './newgem.component';

describe('NewgemComponent', () => {
  let component: NewgemComponent;
  let fixture: ComponentFixture<NewgemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
