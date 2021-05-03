import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2975Component } from './test-component2975.component';

describe('TestComponent2975Component', () => {
  let component: TestComponent2975Component;
  let fixture: ComponentFixture<TestComponent2975Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2975Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
