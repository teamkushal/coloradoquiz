import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1801Component } from './test-component1801.component';

describe('TestComponent1801Component', () => {
  let component: TestComponent1801Component;
  let fixture: ComponentFixture<TestComponent1801Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1801Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
