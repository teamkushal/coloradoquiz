import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2731Component } from './test-component2731.component';

describe('TestComponent2731Component', () => {
  let component: TestComponent2731Component;
  let fixture: ComponentFixture<TestComponent2731Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2731Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
