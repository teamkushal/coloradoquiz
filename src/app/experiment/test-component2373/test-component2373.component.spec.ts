import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2373Component } from './test-component2373.component';

describe('TestComponent2373Component', () => {
  let component: TestComponent2373Component;
  let fixture: ComponentFixture<TestComponent2373Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2373Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
