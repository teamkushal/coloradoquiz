import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1185Component } from './test-component1185.component';

describe('TestComponent1185Component', () => {
  let component: TestComponent1185Component;
  let fixture: ComponentFixture<TestComponent1185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
