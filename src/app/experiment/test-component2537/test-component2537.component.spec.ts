import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2537Component } from './test-component2537.component';

describe('TestComponent2537Component', () => {
  let component: TestComponent2537Component;
  let fixture: ComponentFixture<TestComponent2537Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2537Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
