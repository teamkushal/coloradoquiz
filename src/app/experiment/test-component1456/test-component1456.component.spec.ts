import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1456Component } from './test-component1456.component';

describe('TestComponent1456Component', () => {
  let component: TestComponent1456Component;
  let fixture: ComponentFixture<TestComponent1456Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1456Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
