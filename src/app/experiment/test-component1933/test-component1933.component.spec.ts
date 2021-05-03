import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1933Component } from './test-component1933.component';

describe('TestComponent1933Component', () => {
  let component: TestComponent1933Component;
  let fixture: ComponentFixture<TestComponent1933Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1933Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
