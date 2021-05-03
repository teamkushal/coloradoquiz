import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1366Component } from './test-component1366.component';

describe('TestComponent1366Component', () => {
  let component: TestComponent1366Component;
  let fixture: ComponentFixture<TestComponent1366Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1366Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
