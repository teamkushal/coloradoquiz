import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1267Component } from './test-component1267.component';

describe('TestComponent1267Component', () => {
  let component: TestComponent1267Component;
  let fixture: ComponentFixture<TestComponent1267Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1267Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
