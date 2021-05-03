import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent671Component } from './test-component671.component';

describe('TestComponent671Component', () => {
  let component: TestComponent671Component;
  let fixture: ComponentFixture<TestComponent671Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent671Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
