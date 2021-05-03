import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2646Component } from './test-component2646.component';

describe('TestComponent2646Component', () => {
  let component: TestComponent2646Component;
  let fixture: ComponentFixture<TestComponent2646Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2646Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
