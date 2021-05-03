import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent866Component } from './test-component866.component';

describe('TestComponent866Component', () => {
  let component: TestComponent866Component;
  let fixture: ComponentFixture<TestComponent866Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent866Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
