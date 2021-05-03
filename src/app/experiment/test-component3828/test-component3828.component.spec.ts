import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3828Component } from './test-component3828.component';

describe('TestComponent3828Component', () => {
  let component: TestComponent3828Component;
  let fixture: ComponentFixture<TestComponent3828Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3828Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3828Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
