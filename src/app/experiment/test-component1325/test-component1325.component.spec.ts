import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1325Component } from './test-component1325.component';

describe('TestComponent1325Component', () => {
  let component: TestComponent1325Component;
  let fixture: ComponentFixture<TestComponent1325Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1325Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
