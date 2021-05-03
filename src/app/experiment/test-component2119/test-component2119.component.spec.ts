import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2119Component } from './test-component2119.component';

describe('TestComponent2119Component', () => {
  let component: TestComponent2119Component;
  let fixture: ComponentFixture<TestComponent2119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2119Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
