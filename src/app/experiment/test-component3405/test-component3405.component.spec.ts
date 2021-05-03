import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3405Component } from './test-component3405.component';

describe('TestComponent3405Component', () => {
  let component: TestComponent3405Component;
  let fixture: ComponentFixture<TestComponent3405Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3405Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
