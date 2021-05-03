import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1604Component } from './test-component1604.component';

describe('TestComponent1604Component', () => {
  let component: TestComponent1604Component;
  let fixture: ComponentFixture<TestComponent1604Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1604Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
