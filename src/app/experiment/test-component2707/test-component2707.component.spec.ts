import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2707Component } from './test-component2707.component';

describe('TestComponent2707Component', () => {
  let component: TestComponent2707Component;
  let fixture: ComponentFixture<TestComponent2707Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2707Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2707Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
