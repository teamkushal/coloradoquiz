import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3686Component } from './test-component3686.component';

describe('TestComponent3686Component', () => {
  let component: TestComponent3686Component;
  let fixture: ComponentFixture<TestComponent3686Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3686Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
