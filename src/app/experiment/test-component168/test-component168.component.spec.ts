import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent168Component } from './test-component168.component';

describe('TestComponent168Component', () => {
  let component: TestComponent168Component;
  let fixture: ComponentFixture<TestComponent168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
