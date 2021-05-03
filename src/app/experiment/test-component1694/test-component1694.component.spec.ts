import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1694Component } from './test-component1694.component';

describe('TestComponent1694Component', () => {
  let component: TestComponent1694Component;
  let fixture: ComponentFixture<TestComponent1694Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1694Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
