import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbidComponent } from './showbid.component';

describe('ShowbidComponent', () => {
  let component: ShowbidComponent;
  let fixture: ComponentFixture<ShowbidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowbidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
