import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3268Component } from './test-component3268.component';

describe('TestComponent3268Component', () => {
  let component: TestComponent3268Component;
  let fixture: ComponentFixture<TestComponent3268Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3268Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
