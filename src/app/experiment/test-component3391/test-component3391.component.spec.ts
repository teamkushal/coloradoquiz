import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3391Component } from './test-component3391.component';

describe('TestComponent3391Component', () => {
  let component: TestComponent3391Component;
  let fixture: ComponentFixture<TestComponent3391Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3391Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
