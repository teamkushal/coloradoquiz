import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3754Component } from './test-component3754.component';

describe('TestComponent3754Component', () => {
  let component: TestComponent3754Component;
  let fixture: ComponentFixture<TestComponent3754Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3754Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
