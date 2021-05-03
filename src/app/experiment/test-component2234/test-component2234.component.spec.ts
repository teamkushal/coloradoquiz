import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2234Component } from './test-component2234.component';

describe('TestComponent2234Component', () => {
  let component: TestComponent2234Component;
  let fixture: ComponentFixture<TestComponent2234Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2234Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
