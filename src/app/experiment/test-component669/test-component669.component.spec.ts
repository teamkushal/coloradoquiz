import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent669Component } from './test-component669.component';

describe('TestComponent669Component', () => {
  let component: TestComponent669Component;
  let fixture: ComponentFixture<TestComponent669Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent669Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
