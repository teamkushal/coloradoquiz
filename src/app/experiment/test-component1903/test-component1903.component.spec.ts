import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1903Component } from './test-component1903.component';

describe('TestComponent1903Component', () => {
  let component: TestComponent1903Component;
  let fixture: ComponentFixture<TestComponent1903Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1903Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
