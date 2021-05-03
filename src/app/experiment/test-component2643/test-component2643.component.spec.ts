import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2643Component } from './test-component2643.component';

describe('TestComponent2643Component', () => {
  let component: TestComponent2643Component;
  let fixture: ComponentFixture<TestComponent2643Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2643Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
