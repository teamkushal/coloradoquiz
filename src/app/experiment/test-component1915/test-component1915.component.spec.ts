import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1915Component } from './test-component1915.component';

describe('TestComponent1915Component', () => {
  let component: TestComponent1915Component;
  let fixture: ComponentFixture<TestComponent1915Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1915Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
