import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2220Component } from './test-component2220.component';

describe('TestComponent2220Component', () => {
  let component: TestComponent2220Component;
  let fixture: ComponentFixture<TestComponent2220Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2220Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
