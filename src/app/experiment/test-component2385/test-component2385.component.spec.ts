import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2385Component } from './test-component2385.component';

describe('TestComponent2385Component', () => {
  let component: TestComponent2385Component;
  let fixture: ComponentFixture<TestComponent2385Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2385Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
