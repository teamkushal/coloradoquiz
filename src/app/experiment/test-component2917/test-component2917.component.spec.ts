import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2917Component } from './test-component2917.component';

describe('TestComponent2917Component', () => {
  let component: TestComponent2917Component;
  let fixture: ComponentFixture<TestComponent2917Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2917Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
