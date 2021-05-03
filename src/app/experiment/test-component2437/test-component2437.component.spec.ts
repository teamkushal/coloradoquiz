import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2437Component } from './test-component2437.component';

describe('TestComponent2437Component', () => {
  let component: TestComponent2437Component;
  let fixture: ComponentFixture<TestComponent2437Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2437Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
