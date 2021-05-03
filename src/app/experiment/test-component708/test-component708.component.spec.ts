import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent708Component } from './test-component708.component';

describe('TestComponent708Component', () => {
  let component: TestComponent708Component;
  let fixture: ComponentFixture<TestComponent708Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent708Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
