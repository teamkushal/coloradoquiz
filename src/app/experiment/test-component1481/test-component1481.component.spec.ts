import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1481Component } from './test-component1481.component';

describe('TestComponent1481Component', () => {
  let component: TestComponent1481Component;
  let fixture: ComponentFixture<TestComponent1481Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1481Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
