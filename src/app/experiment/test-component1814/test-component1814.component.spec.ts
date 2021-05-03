import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1814Component } from './test-component1814.component';

describe('TestComponent1814Component', () => {
  let component: TestComponent1814Component;
  let fixture: ComponentFixture<TestComponent1814Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1814Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
