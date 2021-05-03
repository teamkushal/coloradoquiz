import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2340Component } from './test-component2340.component';

describe('TestComponent2340Component', () => {
  let component: TestComponent2340Component;
  let fixture: ComponentFixture<TestComponent2340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2340Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
