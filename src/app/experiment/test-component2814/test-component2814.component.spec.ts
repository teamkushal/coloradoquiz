import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2814Component } from './test-component2814.component';

describe('TestComponent2814Component', () => {
  let component: TestComponent2814Component;
  let fixture: ComponentFixture<TestComponent2814Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2814Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
