import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1745Component } from './test-component1745.component';

describe('TestComponent1745Component', () => {
  let component: TestComponent1745Component;
  let fixture: ComponentFixture<TestComponent1745Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1745Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1745Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
