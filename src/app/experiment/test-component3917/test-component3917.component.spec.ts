import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3917Component } from './test-component3917.component';

describe('TestComponent3917Component', () => {
  let component: TestComponent3917Component;
  let fixture: ComponentFixture<TestComponent3917Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3917Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3917Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
