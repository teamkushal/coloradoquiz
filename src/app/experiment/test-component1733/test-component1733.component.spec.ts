import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1733Component } from './test-component1733.component';

describe('TestComponent1733Component', () => {
  let component: TestComponent1733Component;
  let fixture: ComponentFixture<TestComponent1733Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1733Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
