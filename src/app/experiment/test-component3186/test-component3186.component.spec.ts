import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3186Component } from './test-component3186.component';

describe('TestComponent3186Component', () => {
  let component: TestComponent3186Component;
  let fixture: ComponentFixture<TestComponent3186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
