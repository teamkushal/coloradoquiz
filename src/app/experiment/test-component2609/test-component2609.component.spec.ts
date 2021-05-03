import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2609Component } from './test-component2609.component';

describe('TestComponent2609Component', () => {
  let component: TestComponent2609Component;
  let fixture: ComponentFixture<TestComponent2609Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2609Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
