import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1078Component } from './test-component1078.component';

describe('TestComponent1078Component', () => {
  let component: TestComponent1078Component;
  let fixture: ComponentFixture<TestComponent1078Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1078Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
