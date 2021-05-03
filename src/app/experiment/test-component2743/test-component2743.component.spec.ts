import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2743Component } from './test-component2743.component';

describe('TestComponent2743Component', () => {
  let component: TestComponent2743Component;
  let fixture: ComponentFixture<TestComponent2743Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2743Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
