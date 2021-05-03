import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1958Component } from './test-component1958.component';

describe('TestComponent1958Component', () => {
  let component: TestComponent1958Component;
  let fixture: ComponentFixture<TestComponent1958Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1958Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
