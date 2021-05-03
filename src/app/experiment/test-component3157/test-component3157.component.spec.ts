import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3157Component } from './test-component3157.component';

describe('TestComponent3157Component', () => {
  let component: TestComponent3157Component;
  let fixture: ComponentFixture<TestComponent3157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
