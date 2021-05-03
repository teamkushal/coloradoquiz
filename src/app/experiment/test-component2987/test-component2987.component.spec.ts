import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2987Component } from './test-component2987.component';

describe('TestComponent2987Component', () => {
  let component: TestComponent2987Component;
  let fixture: ComponentFixture<TestComponent2987Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2987Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
