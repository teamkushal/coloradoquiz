import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3588Component } from './test-component3588.component';

describe('TestComponent3588Component', () => {
  let component: TestComponent3588Component;
  let fixture: ComponentFixture<TestComponent3588Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3588Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
