import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1817Component } from './test-component1817.component';

describe('TestComponent1817Component', () => {
  let component: TestComponent1817Component;
  let fixture: ComponentFixture<TestComponent1817Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1817Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
