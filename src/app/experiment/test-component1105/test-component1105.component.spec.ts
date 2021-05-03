import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1105Component } from './test-component1105.component';

describe('TestComponent1105Component', () => {
  let component: TestComponent1105Component;
  let fixture: ComponentFixture<TestComponent1105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1105Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
