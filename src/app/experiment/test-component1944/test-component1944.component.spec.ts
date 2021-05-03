import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1944Component } from './test-component1944.component';

describe('TestComponent1944Component', () => {
  let component: TestComponent1944Component;
  let fixture: ComponentFixture<TestComponent1944Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1944Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
