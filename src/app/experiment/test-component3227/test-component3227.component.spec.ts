import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3227Component } from './test-component3227.component';

describe('TestComponent3227Component', () => {
  let component: TestComponent3227Component;
  let fixture: ComponentFixture<TestComponent3227Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3227Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
