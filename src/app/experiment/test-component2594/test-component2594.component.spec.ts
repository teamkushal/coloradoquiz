import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2594Component } from './test-component2594.component';

describe('TestComponent2594Component', () => {
  let component: TestComponent2594Component;
  let fixture: ComponentFixture<TestComponent2594Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2594Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
