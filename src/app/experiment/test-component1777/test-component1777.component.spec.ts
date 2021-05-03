import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1777Component } from './test-component1777.component';

describe('TestComponent1777Component', () => {
  let component: TestComponent1777Component;
  let fixture: ComponentFixture<TestComponent1777Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1777Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
