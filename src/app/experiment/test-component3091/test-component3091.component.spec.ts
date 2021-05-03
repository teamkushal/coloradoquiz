import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3091Component } from './test-component3091.component';

describe('TestComponent3091Component', () => {
  let component: TestComponent3091Component;
  let fixture: ComponentFixture<TestComponent3091Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3091Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
