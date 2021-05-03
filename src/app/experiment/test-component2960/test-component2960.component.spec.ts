import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2960Component } from './test-component2960.component';

describe('TestComponent2960Component', () => {
  let component: TestComponent2960Component;
  let fixture: ComponentFixture<TestComponent2960Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2960Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
