import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1383Component } from './test-component1383.component';

describe('TestComponent1383Component', () => {
  let component: TestComponent1383Component;
  let fixture: ComponentFixture<TestComponent1383Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1383Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
