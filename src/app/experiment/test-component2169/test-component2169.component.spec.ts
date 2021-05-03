import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2169Component } from './test-component2169.component';

describe('TestComponent2169Component', () => {
  let component: TestComponent2169Component;
  let fixture: ComponentFixture<TestComponent2169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
