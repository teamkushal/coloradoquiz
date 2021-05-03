import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3456Component } from './test-component3456.component';

describe('TestComponent3456Component', () => {
  let component: TestComponent3456Component;
  let fixture: ComponentFixture<TestComponent3456Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3456Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
