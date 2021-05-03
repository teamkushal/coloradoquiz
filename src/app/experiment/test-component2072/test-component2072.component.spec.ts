import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2072Component } from './test-component2072.component';

describe('TestComponent2072Component', () => {
  let component: TestComponent2072Component;
  let fixture: ComponentFixture<TestComponent2072Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2072Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
