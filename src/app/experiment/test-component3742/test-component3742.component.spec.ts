import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3742Component } from './test-component3742.component';

describe('TestComponent3742Component', () => {
  let component: TestComponent3742Component;
  let fixture: ComponentFixture<TestComponent3742Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3742Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3742Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
