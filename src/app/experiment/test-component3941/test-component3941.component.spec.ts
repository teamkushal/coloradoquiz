import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3941Component } from './test-component3941.component';

describe('TestComponent3941Component', () => {
  let component: TestComponent3941Component;
  let fixture: ComponentFixture<TestComponent3941Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3941Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
