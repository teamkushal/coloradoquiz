import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1270Component } from './test-component1270.component';

describe('TestComponent1270Component', () => {
  let component: TestComponent1270Component;
  let fixture: ComponentFixture<TestComponent1270Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1270Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
