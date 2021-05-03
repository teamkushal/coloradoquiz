import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent253Component } from './test-component253.component';

describe('TestComponent253Component', () => {
  let component: TestComponent253Component;
  let fixture: ComponentFixture<TestComponent253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent253Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
