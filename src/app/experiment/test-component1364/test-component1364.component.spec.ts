import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1364Component } from './test-component1364.component';

describe('TestComponent1364Component', () => {
  let component: TestComponent1364Component;
  let fixture: ComponentFixture<TestComponent1364Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1364Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
