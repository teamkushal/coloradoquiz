import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3911Component } from './test-component3911.component';

describe('TestComponent3911Component', () => {
  let component: TestComponent3911Component;
  let fixture: ComponentFixture<TestComponent3911Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3911Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
