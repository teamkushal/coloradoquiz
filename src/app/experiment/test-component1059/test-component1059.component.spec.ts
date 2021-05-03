import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1059Component } from './test-component1059.component';

describe('TestComponent1059Component', () => {
  let component: TestComponent1059Component;
  let fixture: ComponentFixture<TestComponent1059Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1059Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
