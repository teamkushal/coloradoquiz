import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1362Component } from './test-component1362.component';

describe('TestComponent1362Component', () => {
  let component: TestComponent1362Component;
  let fixture: ComponentFixture<TestComponent1362Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1362Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
