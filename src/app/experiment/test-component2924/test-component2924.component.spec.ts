import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2924Component } from './test-component2924.component';

describe('TestComponent2924Component', () => {
  let component: TestComponent2924Component;
  let fixture: ComponentFixture<TestComponent2924Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2924Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
