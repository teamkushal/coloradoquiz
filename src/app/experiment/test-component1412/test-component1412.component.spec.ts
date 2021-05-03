import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1412Component } from './test-component1412.component';

describe('TestComponent1412Component', () => {
  let component: TestComponent1412Component;
  let fixture: ComponentFixture<TestComponent1412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1412Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
