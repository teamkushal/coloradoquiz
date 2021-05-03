import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2930Component } from './test-component2930.component';

describe('TestComponent2930Component', () => {
  let component: TestComponent2930Component;
  let fixture: ComponentFixture<TestComponent2930Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2930Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
