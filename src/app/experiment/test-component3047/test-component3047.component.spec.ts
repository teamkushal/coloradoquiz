import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3047Component } from './test-component3047.component';

describe('TestComponent3047Component', () => {
  let component: TestComponent3047Component;
  let fixture: ComponentFixture<TestComponent3047Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3047Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3047Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
