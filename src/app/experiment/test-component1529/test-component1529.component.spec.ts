import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1529Component } from './test-component1529.component';

describe('TestComponent1529Component', () => {
  let component: TestComponent1529Component;
  let fixture: ComponentFixture<TestComponent1529Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1529Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
