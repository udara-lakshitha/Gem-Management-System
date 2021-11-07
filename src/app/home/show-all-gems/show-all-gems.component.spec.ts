import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllGemsComponent } from './show-all-gems.component';

describe('ShowAllGemsComponent', () => {
  let component: ShowAllGemsComponent;
  let fixture: ComponentFixture<ShowAllGemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllGemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllGemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
