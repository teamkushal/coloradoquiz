import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3078Component } from './test-component3078.component';

describe('TestComponent3078Component', () => {
  let component: TestComponent3078Component;
  let fixture: ComponentFixture<TestComponent3078Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3078Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
