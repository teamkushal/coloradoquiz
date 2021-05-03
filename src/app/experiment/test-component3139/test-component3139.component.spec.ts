import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3139Component } from './test-component3139.component';

describe('TestComponent3139Component', () => {
  let component: TestComponent3139Component;
  let fixture: ComponentFixture<TestComponent3139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
