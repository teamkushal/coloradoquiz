import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent943Component } from './test-component943.component';

describe('TestComponent943Component', () => {
  let component: TestComponent943Component;
  let fixture: ComponentFixture<TestComponent943Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent943Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
