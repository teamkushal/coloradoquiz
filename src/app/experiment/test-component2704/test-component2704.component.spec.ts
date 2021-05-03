import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2704Component } from './test-component2704.component';

describe('TestComponent2704Component', () => {
  let component: TestComponent2704Component;
  let fixture: ComponentFixture<TestComponent2704Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2704Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
