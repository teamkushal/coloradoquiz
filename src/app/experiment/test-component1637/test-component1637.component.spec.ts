import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1637Component } from './test-component1637.component';

describe('TestComponent1637Component', () => {
  let component: TestComponent1637Component;
  let fixture: ComponentFixture<TestComponent1637Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1637Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
