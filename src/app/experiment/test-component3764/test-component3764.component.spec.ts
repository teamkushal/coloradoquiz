import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3764Component } from './test-component3764.component';

describe('TestComponent3764Component', () => {
  let component: TestComponent3764Component;
  let fixture: ComponentFixture<TestComponent3764Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3764Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3764Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
