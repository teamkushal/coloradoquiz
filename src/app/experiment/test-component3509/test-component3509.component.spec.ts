import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3509Component } from './test-component3509.component';

describe('TestComponent3509Component', () => {
  let component: TestComponent3509Component;
  let fixture: ComponentFixture<TestComponent3509Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3509Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
