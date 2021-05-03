import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2495Component } from './test-component2495.component';

describe('TestComponent2495Component', () => {
  let component: TestComponent2495Component;
  let fixture: ComponentFixture<TestComponent2495Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2495Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
