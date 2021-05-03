import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2853Component } from './test-component2853.component';

describe('TestComponent2853Component', () => {
  let component: TestComponent2853Component;
  let fixture: ComponentFixture<TestComponent2853Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2853Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
