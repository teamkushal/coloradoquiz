import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2876Component } from './test-component2876.component';

describe('TestComponent2876Component', () => {
  let component: TestComponent2876Component;
  let fixture: ComponentFixture<TestComponent2876Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2876Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
