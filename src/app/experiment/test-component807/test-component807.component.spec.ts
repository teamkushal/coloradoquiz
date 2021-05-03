import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent807Component } from './test-component807.component';

describe('TestComponent807Component', () => {
  let component: TestComponent807Component;
  let fixture: ComponentFixture<TestComponent807Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent807Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
