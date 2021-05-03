import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2362Component } from './test-component2362.component';

describe('TestComponent2362Component', () => {
  let component: TestComponent2362Component;
  let fixture: ComponentFixture<TestComponent2362Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2362Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
