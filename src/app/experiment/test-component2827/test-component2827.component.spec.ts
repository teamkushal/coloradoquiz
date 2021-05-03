import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2827Component } from './test-component2827.component';

describe('TestComponent2827Component', () => {
  let component: TestComponent2827Component;
  let fixture: ComponentFixture<TestComponent2827Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2827Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
