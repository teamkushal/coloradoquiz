import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3348Component } from './test-component3348.component';

describe('TestComponent3348Component', () => {
  let component: TestComponent3348Component;
  let fixture: ComponentFixture<TestComponent3348Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3348Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
