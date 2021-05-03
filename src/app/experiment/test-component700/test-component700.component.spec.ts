import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent700Component } from './test-component700.component';

describe('TestComponent700Component', () => {
  let component: TestComponent700Component;
  let fixture: ComponentFixture<TestComponent700Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent700Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
