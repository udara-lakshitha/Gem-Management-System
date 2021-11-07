import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowrateuserComponent } from './lowrateuser.component';

describe('LowrateuserComponent', () => {
  let component: LowrateuserComponent;
  let fixture: ComponentFixture<LowrateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowrateuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LowrateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
