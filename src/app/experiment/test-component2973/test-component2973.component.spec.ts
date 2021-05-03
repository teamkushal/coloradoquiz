import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2973Component } from './test-component2973.component';

describe('TestComponent2973Component', () => {
  let component: TestComponent2973Component;
  let fixture: ComponentFixture<TestComponent2973Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2973Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
