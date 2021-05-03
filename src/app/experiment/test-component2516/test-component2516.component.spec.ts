import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2516Component } from './test-component2516.component';

describe('TestComponent2516Component', () => {
  let component: TestComponent2516Component;
  let fixture: ComponentFixture<TestComponent2516Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2516Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
