import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3756Component } from './test-component3756.component';

describe('TestComponent3756Component', () => {
  let component: TestComponent3756Component;
  let fixture: ComponentFixture<TestComponent3756Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3756Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
