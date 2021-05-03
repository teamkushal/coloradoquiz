import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3549Component } from './test-component3549.component';

describe('TestComponent3549Component', () => {
  let component: TestComponent3549Component;
  let fixture: ComponentFixture<TestComponent3549Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3549Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
