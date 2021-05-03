import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2613Component } from './test-component2613.component';

describe('TestComponent2613Component', () => {
  let component: TestComponent2613Component;
  let fixture: ComponentFixture<TestComponent2613Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2613Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
