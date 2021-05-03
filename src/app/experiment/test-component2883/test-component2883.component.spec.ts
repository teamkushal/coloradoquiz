import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2883Component } from './test-component2883.component';

describe('TestComponent2883Component', () => {
  let component: TestComponent2883Component;
  let fixture: ComponentFixture<TestComponent2883Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2883Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
