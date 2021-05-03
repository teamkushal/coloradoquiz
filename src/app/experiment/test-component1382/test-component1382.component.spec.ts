import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1382Component } from './test-component1382.component';

describe('TestComponent1382Component', () => {
  let component: TestComponent1382Component;
  let fixture: ComponentFixture<TestComponent1382Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1382Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
