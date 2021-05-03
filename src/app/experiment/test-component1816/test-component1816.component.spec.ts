import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1816Component } from './test-component1816.component';

describe('TestComponent1816Component', () => {
  let component: TestComponent1816Component;
  let fixture: ComponentFixture<TestComponent1816Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1816Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
