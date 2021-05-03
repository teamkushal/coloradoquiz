import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2418Component } from './test-component2418.component';

describe('TestComponent2418Component', () => {
  let component: TestComponent2418Component;
  let fixture: ComponentFixture<TestComponent2418Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2418Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
