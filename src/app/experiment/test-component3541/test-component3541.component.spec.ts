import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3541Component } from './test-component3541.component';

describe('TestComponent3541Component', () => {
  let component: TestComponent3541Component;
  let fixture: ComponentFixture<TestComponent3541Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3541Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
