import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2925Component } from './test-component2925.component';

describe('TestComponent2925Component', () => {
  let component: TestComponent2925Component;
  let fixture: ComponentFixture<TestComponent2925Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2925Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
