import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1678Component } from './test-component1678.component';

describe('TestComponent1678Component', () => {
  let component: TestComponent1678Component;
  let fixture: ComponentFixture<TestComponent1678Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1678Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1678Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
