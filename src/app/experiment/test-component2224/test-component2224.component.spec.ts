import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2224Component } from './test-component2224.component';

describe('TestComponent2224Component', () => {
  let component: TestComponent2224Component;
  let fixture: ComponentFixture<TestComponent2224Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2224Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
