import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2598Component } from './test-component2598.component';

describe('TestComponent2598Component', () => {
  let component: TestComponent2598Component;
  let fixture: ComponentFixture<TestComponent2598Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2598Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
