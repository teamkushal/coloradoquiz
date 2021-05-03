import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1957Component } from './test-component1957.component';

describe('TestComponent1957Component', () => {
  let component: TestComponent1957Component;
  let fixture: ComponentFixture<TestComponent1957Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1957Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
