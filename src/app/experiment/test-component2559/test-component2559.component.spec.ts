import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2559Component } from './test-component2559.component';

describe('TestComponent2559Component', () => {
  let component: TestComponent2559Component;
  let fixture: ComponentFixture<TestComponent2559Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2559Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
