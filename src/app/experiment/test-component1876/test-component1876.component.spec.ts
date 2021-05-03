import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1876Component } from './test-component1876.component';

describe('TestComponent1876Component', () => {
  let component: TestComponent1876Component;
  let fixture: ComponentFixture<TestComponent1876Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1876Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
