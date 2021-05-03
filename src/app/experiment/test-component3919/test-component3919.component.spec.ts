import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3919Component } from './test-component3919.component';

describe('TestComponent3919Component', () => {
  let component: TestComponent3919Component;
  let fixture: ComponentFixture<TestComponent3919Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3919Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
