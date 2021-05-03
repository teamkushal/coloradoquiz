import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3807Component } from './test-component3807.component';

describe('TestComponent3807Component', () => {
  let component: TestComponent3807Component;
  let fixture: ComponentFixture<TestComponent3807Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3807Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
