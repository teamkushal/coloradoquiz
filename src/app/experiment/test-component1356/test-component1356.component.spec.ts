import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1356Component } from './test-component1356.component';

describe('TestComponent1356Component', () => {
  let component: TestComponent1356Component;
  let fixture: ComponentFixture<TestComponent1356Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1356Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
