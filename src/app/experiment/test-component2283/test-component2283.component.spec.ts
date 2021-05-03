import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2283Component } from './test-component2283.component';

describe('TestComponent2283Component', () => {
  let component: TestComponent2283Component;
  let fixture: ComponentFixture<TestComponent2283Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2283Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
