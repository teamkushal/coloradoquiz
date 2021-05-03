import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1742Component } from './test-component1742.component';

describe('TestComponent1742Component', () => {
  let component: TestComponent1742Component;
  let fixture: ComponentFixture<TestComponent1742Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1742Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
