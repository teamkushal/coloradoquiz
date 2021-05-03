import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent661Component } from './test-component661.component';

describe('TestComponent661Component', () => {
  let component: TestComponent661Component;
  let fixture: ComponentFixture<TestComponent661Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent661Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent661Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
