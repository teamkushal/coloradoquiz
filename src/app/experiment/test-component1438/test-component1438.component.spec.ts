import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1438Component } from './test-component1438.component';

describe('TestComponent1438Component', () => {
  let component: TestComponent1438Component;
  let fixture: ComponentFixture<TestComponent1438Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1438Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
