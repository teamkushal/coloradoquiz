import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1704Component } from './test-component1704.component';

describe('TestComponent1704Component', () => {
  let component: TestComponent1704Component;
  let fixture: ComponentFixture<TestComponent1704Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1704Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
