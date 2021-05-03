import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3786Component } from './test-component3786.component';

describe('TestComponent3786Component', () => {
  let component: TestComponent3786Component;
  let fixture: ComponentFixture<TestComponent3786Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3786Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
