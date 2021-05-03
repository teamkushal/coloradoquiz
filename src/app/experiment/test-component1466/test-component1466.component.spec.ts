import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1466Component } from './test-component1466.component';

describe('TestComponent1466Component', () => {
  let component: TestComponent1466Component;
  let fixture: ComponentFixture<TestComponent1466Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1466Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
