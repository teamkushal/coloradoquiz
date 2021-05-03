import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2479Component } from './test-component2479.component';

describe('TestComponent2479Component', () => {
  let component: TestComponent2479Component;
  let fixture: ComponentFixture<TestComponent2479Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2479Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
