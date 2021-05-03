import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3473Component } from './test-component3473.component';

describe('TestComponent3473Component', () => {
  let component: TestComponent3473Component;
  let fixture: ComponentFixture<TestComponent3473Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3473Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
