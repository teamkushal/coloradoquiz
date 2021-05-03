import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1559Component } from './test-component1559.component';

describe('TestComponent1559Component', () => {
  let component: TestComponent1559Component;
  let fixture: ComponentFixture<TestComponent1559Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1559Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
