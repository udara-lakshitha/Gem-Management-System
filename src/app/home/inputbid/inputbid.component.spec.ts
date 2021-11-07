import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputbidComponent } from './inputbid.component';

describe('InputbidComponent', () => {
  let component: InputbidComponent;
  let fixture: ComponentFixture<InputbidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputbidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
