import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2861Component } from './test-component2861.component';

describe('TestComponent2861Component', () => {
  let component: TestComponent2861Component;
  let fixture: ComponentFixture<TestComponent2861Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2861Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
