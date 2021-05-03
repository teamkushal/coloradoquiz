import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1686Component } from './test-component1686.component';

describe('TestComponent1686Component', () => {
  let component: TestComponent1686Component;
  let fixture: ComponentFixture<TestComponent1686Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1686Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
