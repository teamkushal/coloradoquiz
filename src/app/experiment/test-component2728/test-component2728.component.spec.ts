import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2728Component } from './test-component2728.component';

describe('TestComponent2728Component', () => {
  let component: TestComponent2728Component;
  let fixture: ComponentFixture<TestComponent2728Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2728Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
