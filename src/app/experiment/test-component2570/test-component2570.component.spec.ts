import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2570Component } from './test-component2570.component';

describe('TestComponent2570Component', () => {
  let component: TestComponent2570Component;
  let fixture: ComponentFixture<TestComponent2570Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2570Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2570Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
