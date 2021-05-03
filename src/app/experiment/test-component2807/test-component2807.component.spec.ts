import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2807Component } from './test-component2807.component';

describe('TestComponent2807Component', () => {
  let component: TestComponent2807Component;
  let fixture: ComponentFixture<TestComponent2807Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2807Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
