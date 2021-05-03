import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2455Component } from './test-component2455.component';

describe('TestComponent2455Component', () => {
  let component: TestComponent2455Component;
  let fixture: ComponentFixture<TestComponent2455Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2455Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
