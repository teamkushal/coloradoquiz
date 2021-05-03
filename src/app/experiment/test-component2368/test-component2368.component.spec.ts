import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2368Component } from './test-component2368.component';

describe('TestComponent2368Component', () => {
  let component: TestComponent2368Component;
  let fixture: ComponentFixture<TestComponent2368Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2368Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
