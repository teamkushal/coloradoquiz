import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3274Component } from './test-component3274.component';

describe('TestComponent3274Component', () => {
  let component: TestComponent3274Component;
  let fixture: ComponentFixture<TestComponent3274Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3274Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
