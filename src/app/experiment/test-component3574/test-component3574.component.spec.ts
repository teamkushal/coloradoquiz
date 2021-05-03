import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3574Component } from './test-component3574.component';

describe('TestComponent3574Component', () => {
  let component: TestComponent3574Component;
  let fixture: ComponentFixture<TestComponent3574Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3574Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
