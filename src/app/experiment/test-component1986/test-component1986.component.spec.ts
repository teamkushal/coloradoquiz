import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1986Component } from './test-component1986.component';

describe('TestComponent1986Component', () => {
  let component: TestComponent1986Component;
  let fixture: ComponentFixture<TestComponent1986Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1986Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
