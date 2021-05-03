import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1550Component } from './test-component1550.component';

describe('TestComponent1550Component', () => {
  let component: TestComponent1550Component;
  let fixture: ComponentFixture<TestComponent1550Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1550Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
