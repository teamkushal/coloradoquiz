import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent559Component } from './test-component559.component';

describe('TestComponent559Component', () => {
  let component: TestComponent559Component;
  let fixture: ComponentFixture<TestComponent559Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent559Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
