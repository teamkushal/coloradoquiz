import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent878Component } from './test-component878.component';

describe('TestComponent878Component', () => {
  let component: TestComponent878Component;
  let fixture: ComponentFixture<TestComponent878Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent878Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
