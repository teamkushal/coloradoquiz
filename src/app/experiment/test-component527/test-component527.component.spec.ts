import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent527Component } from './test-component527.component';

describe('TestComponent527Component', () => {
  let component: TestComponent527Component;
  let fixture: ComponentFixture<TestComponent527Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent527Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
