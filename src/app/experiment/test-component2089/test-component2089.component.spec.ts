import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2089Component } from './test-component2089.component';

describe('TestComponent2089Component', () => {
  let component: TestComponent2089Component;
  let fixture: ComponentFixture<TestComponent2089Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2089Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
