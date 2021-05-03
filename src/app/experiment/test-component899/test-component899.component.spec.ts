import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent899Component } from './test-component899.component';

describe('TestComponent899Component', () => {
  let component: TestComponent899Component;
  let fixture: ComponentFixture<TestComponent899Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent899Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
