import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3677Component } from './test-component3677.component';

describe('TestComponent3677Component', () => {
  let component: TestComponent3677Component;
  let fixture: ComponentFixture<TestComponent3677Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3677Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
