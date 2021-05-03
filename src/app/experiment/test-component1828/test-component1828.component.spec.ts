import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1828Component } from './test-component1828.component';

describe('TestComponent1828Component', () => {
  let component: TestComponent1828Component;
  let fixture: ComponentFixture<TestComponent1828Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1828Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
