import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3506Component } from './test-component3506.component';

describe('TestComponent3506Component', () => {
  let component: TestComponent3506Component;
  let fixture: ComponentFixture<TestComponent3506Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3506Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3506Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
