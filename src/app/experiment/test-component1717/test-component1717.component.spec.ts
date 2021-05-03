import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1717Component } from './test-component1717.component';

describe('TestComponent1717Component', () => {
  let component: TestComponent1717Component;
  let fixture: ComponentFixture<TestComponent1717Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1717Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1717Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
