import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1533Component } from './test-component1533.component';

describe('TestComponent1533Component', () => {
  let component: TestComponent1533Component;
  let fixture: ComponentFixture<TestComponent1533Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1533Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
