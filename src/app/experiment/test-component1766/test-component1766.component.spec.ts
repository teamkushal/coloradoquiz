import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1766Component } from './test-component1766.component';

describe('TestComponent1766Component', () => {
  let component: TestComponent1766Component;
  let fixture: ComponentFixture<TestComponent1766Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1766Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1766Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
