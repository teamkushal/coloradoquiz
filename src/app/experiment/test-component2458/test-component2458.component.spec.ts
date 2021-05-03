import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2458Component } from './test-component2458.component';

describe('TestComponent2458Component', () => {
  let component: TestComponent2458Component;
  let fixture: ComponentFixture<TestComponent2458Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2458Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
