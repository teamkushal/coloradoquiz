import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2939Component } from './test-component2939.component';

describe('TestComponent2939Component', () => {
  let component: TestComponent2939Component;
  let fixture: ComponentFixture<TestComponent2939Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2939Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
