import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent919Component } from './test-component919.component';

describe('TestComponent919Component', () => {
  let component: TestComponent919Component;
  let fixture: ComponentFixture<TestComponent919Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent919Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent919Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
