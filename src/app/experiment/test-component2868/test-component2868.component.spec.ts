import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2868Component } from './test-component2868.component';

describe('TestComponent2868Component', () => {
  let component: TestComponent2868Component;
  let fixture: ComponentFixture<TestComponent2868Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2868Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
