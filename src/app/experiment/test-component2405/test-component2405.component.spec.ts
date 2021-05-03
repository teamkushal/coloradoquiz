import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2405Component } from './test-component2405.component';

describe('TestComponent2405Component', () => {
  let component: TestComponent2405Component;
  let fixture: ComponentFixture<TestComponent2405Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2405Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
