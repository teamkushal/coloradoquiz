import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2638Component } from './test-component2638.component';

describe('TestComponent2638Component', () => {
  let component: TestComponent2638Component;
  let fixture: ComponentFixture<TestComponent2638Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2638Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
