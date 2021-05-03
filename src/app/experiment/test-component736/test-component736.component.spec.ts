import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent736Component } from './test-component736.component';

describe('TestComponent736Component', () => {
  let component: TestComponent736Component;
  let fixture: ComponentFixture<TestComponent736Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent736Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent736Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
