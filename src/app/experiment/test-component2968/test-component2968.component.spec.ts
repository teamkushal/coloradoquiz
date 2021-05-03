import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2968Component } from './test-component2968.component';

describe('TestComponent2968Component', () => {
  let component: TestComponent2968Component;
  let fixture: ComponentFixture<TestComponent2968Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2968Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
