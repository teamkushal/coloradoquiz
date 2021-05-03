import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1284Component } from './test-component1284.component';

describe('TestComponent1284Component', () => {
  let component: TestComponent1284Component;
  let fixture: ComponentFixture<TestComponent1284Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1284Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
