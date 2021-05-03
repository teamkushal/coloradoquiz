import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent776Component } from './test-component776.component';

describe('TestComponent776Component', () => {
  let component: TestComponent776Component;
  let fixture: ComponentFixture<TestComponent776Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent776Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
