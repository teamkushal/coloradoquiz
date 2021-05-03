import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent437Component } from './test-component437.component';

describe('TestComponent437Component', () => {
  let component: TestComponent437Component;
  let fixture: ComponentFixture<TestComponent437Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent437Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
