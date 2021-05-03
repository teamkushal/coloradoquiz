import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2971Component } from './test-component2971.component';

describe('TestComponent2971Component', () => {
  let component: TestComponent2971Component;
  let fixture: ComponentFixture<TestComponent2971Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2971Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
