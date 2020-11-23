import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonUserNavComponent } from './non-user-nav.component';

describe('NonUserNavComponent', () => {
  let component: NonUserNavComponent;
  let fixture: ComponentFixture<NonUserNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonUserNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonUserNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
