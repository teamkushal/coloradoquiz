import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2867Component } from './test-component2867.component';

describe('TestComponent2867Component', () => {
  let component: TestComponent2867Component;
  let fixture: ComponentFixture<TestComponent2867Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2867Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
