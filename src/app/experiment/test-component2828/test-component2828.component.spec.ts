import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2828Component } from './test-component2828.component';

describe('TestComponent2828Component', () => {
  let component: TestComponent2828Component;
  let fixture: ComponentFixture<TestComponent2828Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2828Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
