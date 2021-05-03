import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2777Component } from './test-component2777.component';

describe('TestComponent2777Component', () => {
  let component: TestComponent2777Component;
  let fixture: ComponentFixture<TestComponent2777Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2777Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
