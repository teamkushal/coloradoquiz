import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1941Component } from './test-component1941.component';

describe('TestComponent1941Component', () => {
  let component: TestComponent1941Component;
  let fixture: ComponentFixture<TestComponent1941Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1941Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
