import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2711Component } from './test-component2711.component';

describe('TestComponent2711Component', () => {
  let component: TestComponent2711Component;
  let fixture: ComponentFixture<TestComponent2711Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2711Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
