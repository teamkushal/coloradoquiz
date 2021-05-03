import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1765Component } from './test-component1765.component';

describe('TestComponent1765Component', () => {
  let component: TestComponent1765Component;
  let fixture: ComponentFixture<TestComponent1765Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1765Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
