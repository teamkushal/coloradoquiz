import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1663Component } from './test-component1663.component';

describe('TestComponent1663Component', () => {
  let component: TestComponent1663Component;
  let fixture: ComponentFixture<TestComponent1663Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1663Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
