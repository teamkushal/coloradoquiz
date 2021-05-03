import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3191Component } from './test-component3191.component';

describe('TestComponent3191Component', () => {
  let component: TestComponent3191Component;
  let fixture: ComponentFixture<TestComponent3191Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3191Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
