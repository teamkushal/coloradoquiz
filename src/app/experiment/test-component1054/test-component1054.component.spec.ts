import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1054Component } from './test-component1054.component';

describe('TestComponent1054Component', () => {
  let component: TestComponent1054Component;
  let fixture: ComponentFixture<TestComponent1054Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1054Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
