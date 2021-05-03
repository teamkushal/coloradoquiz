import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1624Component } from './test-component1624.component';

describe('TestComponent1624Component', () => {
  let component: TestComponent1624Component;
  let fixture: ComponentFixture<TestComponent1624Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1624Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
