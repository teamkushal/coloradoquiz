import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2995Component } from './test-component2995.component';

describe('TestComponent2995Component', () => {
  let component: TestComponent2995Component;
  let fixture: ComponentFixture<TestComponent2995Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2995Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
