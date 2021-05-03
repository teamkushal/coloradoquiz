import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent356Component } from './test-component356.component';

describe('TestComponent356Component', () => {
  let component: TestComponent356Component;
  let fixture: ComponentFixture<TestComponent356Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent356Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
