import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1186Component } from './test-component1186.component';

describe('TestComponent1186Component', () => {
  let component: TestComponent1186Component;
  let fixture: ComponentFixture<TestComponent1186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
