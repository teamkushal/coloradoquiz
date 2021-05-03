import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1808Component } from './test-component1808.component';

describe('TestComponent1808Component', () => {
  let component: TestComponent1808Component;
  let fixture: ComponentFixture<TestComponent1808Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1808Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
