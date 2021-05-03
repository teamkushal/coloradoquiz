import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3033Component } from './test-component3033.component';

describe('TestComponent3033Component', () => {
  let component: TestComponent3033Component;
  let fixture: ComponentFixture<TestComponent3033Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3033Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
