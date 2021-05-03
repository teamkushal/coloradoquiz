import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1638Component } from './test-component1638.component';

describe('TestComponent1638Component', () => {
  let component: TestComponent1638Component;
  let fixture: ComponentFixture<TestComponent1638Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1638Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
