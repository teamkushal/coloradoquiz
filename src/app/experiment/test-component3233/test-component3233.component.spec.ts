import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3233Component } from './test-component3233.component';

describe('TestComponent3233Component', () => {
  let component: TestComponent3233Component;
  let fixture: ComponentFixture<TestComponent3233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3233Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
