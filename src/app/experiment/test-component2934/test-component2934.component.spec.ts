import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2934Component } from './test-component2934.component';

describe('TestComponent2934Component', () => {
  let component: TestComponent2934Component;
  let fixture: ComponentFixture<TestComponent2934Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2934Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
