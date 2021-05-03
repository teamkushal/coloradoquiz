import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3302Component } from './test-component3302.component';

describe('TestComponent3302Component', () => {
  let component: TestComponent3302Component;
  let fixture: ComponentFixture<TestComponent3302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3302Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
