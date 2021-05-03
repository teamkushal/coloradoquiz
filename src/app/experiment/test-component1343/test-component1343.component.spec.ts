import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1343Component } from './test-component1343.component';

describe('TestComponent1343Component', () => {
  let component: TestComponent1343Component;
  let fixture: ComponentFixture<TestComponent1343Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1343Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
