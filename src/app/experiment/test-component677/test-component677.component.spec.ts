import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent677Component } from './test-component677.component';

describe('TestComponent677Component', () => {
  let component: TestComponent677Component;
  let fixture: ComponentFixture<TestComponent677Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent677Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
