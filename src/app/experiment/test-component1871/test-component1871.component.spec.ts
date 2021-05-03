import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1871Component } from './test-component1871.component';

describe('TestComponent1871Component', () => {
  let component: TestComponent1871Component;
  let fixture: ComponentFixture<TestComponent1871Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1871Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
