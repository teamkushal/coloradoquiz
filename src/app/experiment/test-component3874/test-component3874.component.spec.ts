import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3874Component } from './test-component3874.component';

describe('TestComponent3874Component', () => {
  let component: TestComponent3874Component;
  let fixture: ComponentFixture<TestComponent3874Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3874Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
