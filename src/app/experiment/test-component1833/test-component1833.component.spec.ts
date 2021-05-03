import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1833Component } from './test-component1833.component';

describe('TestComponent1833Component', () => {
  let component: TestComponent1833Component;
  let fixture: ComponentFixture<TestComponent1833Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1833Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
