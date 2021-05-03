import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1120Component } from './test-component1120.component';

describe('TestComponent1120Component', () => {
  let component: TestComponent1120Component;
  let fixture: ComponentFixture<TestComponent1120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
