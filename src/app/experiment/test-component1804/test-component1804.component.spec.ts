import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1804Component } from './test-component1804.component';

describe('TestComponent1804Component', () => {
  let component: TestComponent1804Component;
  let fixture: ComponentFixture<TestComponent1804Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1804Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1804Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
