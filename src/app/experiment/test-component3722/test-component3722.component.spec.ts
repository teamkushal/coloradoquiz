import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3722Component } from './test-component3722.component';

describe('TestComponent3722Component', () => {
  let component: TestComponent3722Component;
  let fixture: ComponentFixture<TestComponent3722Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3722Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
