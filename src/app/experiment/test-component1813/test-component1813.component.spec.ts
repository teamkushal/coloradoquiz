import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1813Component } from './test-component1813.component';

describe('TestComponent1813Component', () => {
  let component: TestComponent1813Component;
  let fixture: ComponentFixture<TestComponent1813Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1813Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
