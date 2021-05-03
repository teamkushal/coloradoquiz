import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1012Component } from './test-component1012.component';

describe('TestComponent1012Component', () => {
  let component: TestComponent1012Component;
  let fixture: ComponentFixture<TestComponent1012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1012Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
