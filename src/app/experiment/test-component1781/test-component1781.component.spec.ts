import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1781Component } from './test-component1781.component';

describe('TestComponent1781Component', () => {
  let component: TestComponent1781Component;
  let fixture: ComponentFixture<TestComponent1781Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1781Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
