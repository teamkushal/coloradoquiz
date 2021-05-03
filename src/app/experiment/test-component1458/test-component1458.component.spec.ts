import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1458Component } from './test-component1458.component';

describe('TestComponent1458Component', () => {
  let component: TestComponent1458Component;
  let fixture: ComponentFixture<TestComponent1458Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1458Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
