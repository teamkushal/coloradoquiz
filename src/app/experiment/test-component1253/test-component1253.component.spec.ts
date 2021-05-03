import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1253Component } from './test-component1253.component';

describe('TestComponent1253Component', () => {
  let component: TestComponent1253Component;
  let fixture: ComponentFixture<TestComponent1253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1253Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
