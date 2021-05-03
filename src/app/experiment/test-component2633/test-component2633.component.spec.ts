import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2633Component } from './test-component2633.component';

describe('TestComponent2633Component', () => {
  let component: TestComponent2633Component;
  let fixture: ComponentFixture<TestComponent2633Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2633Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
