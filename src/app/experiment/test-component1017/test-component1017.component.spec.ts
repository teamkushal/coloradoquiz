import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1017Component } from './test-component1017.component';

describe('TestComponent1017Component', () => {
  let component: TestComponent1017Component;
  let fixture: ComponentFixture<TestComponent1017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
