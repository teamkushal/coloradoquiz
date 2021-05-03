import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2302Component } from './test-component2302.component';

describe('TestComponent2302Component', () => {
  let component: TestComponent2302Component;
  let fixture: ComponentFixture<TestComponent2302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2302Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
