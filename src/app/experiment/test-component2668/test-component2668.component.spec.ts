import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2668Component } from './test-component2668.component';

describe('TestComponent2668Component', () => {
  let component: TestComponent2668Component;
  let fixture: ComponentFixture<TestComponent2668Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2668Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2668Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
