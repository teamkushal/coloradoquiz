import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1483Component } from './test-component1483.component';

describe('TestComponent1483Component', () => {
  let component: TestComponent1483Component;
  let fixture: ComponentFixture<TestComponent1483Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1483Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
