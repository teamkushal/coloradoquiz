import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2054Component } from './test-component2054.component';

describe('TestComponent2054Component', () => {
  let component: TestComponent2054Component;
  let fixture: ComponentFixture<TestComponent2054Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2054Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
