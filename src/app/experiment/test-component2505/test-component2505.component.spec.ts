import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2505Component } from './test-component2505.component';

describe('TestComponent2505Component', () => {
  let component: TestComponent2505Component;
  let fixture: ComponentFixture<TestComponent2505Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2505Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
