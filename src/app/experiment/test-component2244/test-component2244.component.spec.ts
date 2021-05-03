import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2244Component } from './test-component2244.component';

describe('TestComponent2244Component', () => {
  let component: TestComponent2244Component;
  let fixture: ComponentFixture<TestComponent2244Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2244Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
