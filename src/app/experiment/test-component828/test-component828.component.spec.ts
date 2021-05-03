import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent828Component } from './test-component828.component';

describe('TestComponent828Component', () => {
  let component: TestComponent828Component;
  let fixture: ComponentFixture<TestComponent828Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent828Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
