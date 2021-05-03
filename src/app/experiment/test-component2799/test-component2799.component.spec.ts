import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2799Component } from './test-component2799.component';

describe('TestComponent2799Component', () => {
  let component: TestComponent2799Component;
  let fixture: ComponentFixture<TestComponent2799Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2799Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2799Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
