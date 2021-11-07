import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedmeetingsComponent } from './confirmedmeetings.component';

describe('ConfirmedmeetingsComponent', () => {
  let component: ConfirmedmeetingsComponent;
  let fixture: ComponentFixture<ConfirmedmeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedmeetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
