import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2563Component } from './test-component2563.component';

describe('TestComponent2563Component', () => {
  let component: TestComponent2563Component;
  let fixture: ComponentFixture<TestComponent2563Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2563Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
