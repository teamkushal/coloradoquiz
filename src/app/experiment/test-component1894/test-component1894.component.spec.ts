import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1894Component } from './test-component1894.component';

describe('TestComponent1894Component', () => {
  let component: TestComponent1894Component;
  let fixture: ComponentFixture<TestComponent1894Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1894Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
