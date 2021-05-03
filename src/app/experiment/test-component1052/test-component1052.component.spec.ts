import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1052Component } from './test-component1052.component';

describe('TestComponent1052Component', () => {
  let component: TestComponent1052Component;
  let fixture: ComponentFixture<TestComponent1052Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1052Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
