import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3824Component } from './test-component3824.component';

describe('TestComponent3824Component', () => {
  let component: TestComponent3824Component;
  let fixture: ComponentFixture<TestComponent3824Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3824Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
