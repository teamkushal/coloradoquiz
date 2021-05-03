import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2696Component } from './test-component2696.component';

describe('TestComponent2696Component', () => {
  let component: TestComponent2696Component;
  let fixture: ComponentFixture<TestComponent2696Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2696Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
