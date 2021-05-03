import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3534Component } from './test-component3534.component';

describe('TestComponent3534Component', () => {
  let component: TestComponent3534Component;
  let fixture: ComponentFixture<TestComponent3534Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3534Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3534Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
