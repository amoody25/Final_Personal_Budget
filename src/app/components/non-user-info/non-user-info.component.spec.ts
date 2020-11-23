import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonUserInfoComponent } from './non-user-info.component';

describe('NonUserInfoComponent', () => {
  let component: NonUserInfoComponent;
  let fixture: ComponentFixture<NonUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonUserInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
