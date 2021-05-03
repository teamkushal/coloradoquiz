import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent86Component } from './test-component86.component';

describe('TestComponent86Component', () => {
  let component: TestComponent86Component;
  let fixture: ComponentFixture<TestComponent86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent86Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
