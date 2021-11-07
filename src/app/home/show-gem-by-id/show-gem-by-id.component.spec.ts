import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGemByIdComponent } from './show-gem-by-id.component';

describe('ShowGemByIdComponent', () => {
  let component: ShowGemByIdComponent;
  let fixture: ComponentFixture<ShowGemByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGemByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGemByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
