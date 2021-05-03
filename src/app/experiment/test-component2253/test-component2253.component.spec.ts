import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2253Component } from './test-component2253.component';

describe('TestComponent2253Component', () => {
  let component: TestComponent2253Component;
  let fixture: ComponentFixture<TestComponent2253Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2253Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
