import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1769Component } from './test-component1769.component';

describe('TestComponent1769Component', () => {
  let component: TestComponent1769Component;
  let fixture: ComponentFixture<TestComponent1769Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1769Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
