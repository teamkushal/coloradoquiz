import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1322Component } from './test-component1322.component';

describe('TestComponent1322Component', () => {
  let component: TestComponent1322Component;
  let fixture: ComponentFixture<TestComponent1322Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1322Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
