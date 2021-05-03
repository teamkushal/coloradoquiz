import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1558Component } from './test-component1558.component';

describe('TestComponent1558Component', () => {
  let component: TestComponent1558Component;
  let fixture: ComponentFixture<TestComponent1558Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1558Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
