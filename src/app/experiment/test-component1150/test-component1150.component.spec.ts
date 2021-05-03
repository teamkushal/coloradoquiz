import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1150Component } from './test-component1150.component';

describe('TestComponent1150Component', () => {
  let component: TestComponent1150Component;
  let fixture: ComponentFixture<TestComponent1150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
