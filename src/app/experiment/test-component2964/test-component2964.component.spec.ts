import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2964Component } from './test-component2964.component';

describe('TestComponent2964Component', () => {
  let component: TestComponent2964Component;
  let fixture: ComponentFixture<TestComponent2964Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2964Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
