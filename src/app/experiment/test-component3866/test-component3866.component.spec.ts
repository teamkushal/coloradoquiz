import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3866Component } from './test-component3866.component';

describe('TestComponent3866Component', () => {
  let component: TestComponent3866Component;
  let fixture: ComponentFixture<TestComponent3866Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3866Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
