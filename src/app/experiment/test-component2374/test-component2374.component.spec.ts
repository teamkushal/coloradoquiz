import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2374Component } from './test-component2374.component';

describe('TestComponent2374Component', () => {
  let component: TestComponent2374Component;
  let fixture: ComponentFixture<TestComponent2374Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2374Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
