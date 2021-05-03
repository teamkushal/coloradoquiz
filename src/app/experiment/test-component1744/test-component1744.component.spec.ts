import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1744Component } from './test-component1744.component';

describe('TestComponent1744Component', () => {
  let component: TestComponent1744Component;
  let fixture: ComponentFixture<TestComponent1744Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1744Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1744Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
