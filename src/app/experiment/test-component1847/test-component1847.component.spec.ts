import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1847Component } from './test-component1847.component';

describe('TestComponent1847Component', () => {
  let component: TestComponent1847Component;
  let fixture: ComponentFixture<TestComponent1847Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1847Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
