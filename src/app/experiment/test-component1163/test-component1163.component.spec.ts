import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1163Component } from './test-component1163.component';

describe('TestComponent1163Component', () => {
  let component: TestComponent1163Component;
  let fixture: ComponentFixture<TestComponent1163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
