import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3883Component } from './test-component3883.component';

describe('TestComponent3883Component', () => {
  let component: TestComponent3883Component;
  let fixture: ComponentFixture<TestComponent3883Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3883Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
