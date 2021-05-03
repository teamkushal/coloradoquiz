import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1590Component } from './test-component1590.component';

describe('TestComponent1590Component', () => {
  let component: TestComponent1590Component;
  let fixture: ComponentFixture<TestComponent1590Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1590Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
