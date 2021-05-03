import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2502Component } from './test-component2502.component';

describe('TestComponent2502Component', () => {
  let component: TestComponent2502Component;
  let fixture: ComponentFixture<TestComponent2502Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2502Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2502Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
