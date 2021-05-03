import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1651Component } from './test-component1651.component';

describe('TestComponent1651Component', () => {
  let component: TestComponent1651Component;
  let fixture: ComponentFixture<TestComponent1651Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1651Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
