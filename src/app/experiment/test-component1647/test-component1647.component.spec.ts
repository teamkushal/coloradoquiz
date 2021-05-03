import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1647Component } from './test-component1647.component';

describe('TestComponent1647Component', () => {
  let component: TestComponent1647Component;
  let fixture: ComponentFixture<TestComponent1647Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1647Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
