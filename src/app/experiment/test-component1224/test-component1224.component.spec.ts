import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1224Component } from './test-component1224.component';

describe('TestComponent1224Component', () => {
  let component: TestComponent1224Component;
  let fixture: ComponentFixture<TestComponent1224Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1224Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
