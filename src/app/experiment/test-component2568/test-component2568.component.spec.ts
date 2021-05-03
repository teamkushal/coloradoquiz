import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2568Component } from './test-component2568.component';

describe('TestComponent2568Component', () => {
  let component: TestComponent2568Component;
  let fixture: ComponentFixture<TestComponent2568Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2568Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
