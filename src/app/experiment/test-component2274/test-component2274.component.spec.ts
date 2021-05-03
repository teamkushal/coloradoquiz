import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2274Component } from './test-component2274.component';

describe('TestComponent2274Component', () => {
  let component: TestComponent2274Component;
  let fixture: ComponentFixture<TestComponent2274Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2274Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
