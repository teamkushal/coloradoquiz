import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1117Component } from './test-component1117.component';

describe('TestComponent1117Component', () => {
  let component: TestComponent1117Component;
  let fixture: ComponentFixture<TestComponent1117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
