import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2038Component } from './test-component2038.component';

describe('TestComponent2038Component', () => {
  let component: TestComponent2038Component;
  let fixture: ComponentFixture<TestComponent2038Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2038Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
