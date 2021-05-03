import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2761Component } from './test-component2761.component';

describe('TestComponent2761Component', () => {
  let component: TestComponent2761Component;
  let fixture: ComponentFixture<TestComponent2761Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2761Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
