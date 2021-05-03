import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2269Component } from './test-component2269.component';

describe('TestComponent2269Component', () => {
  let component: TestComponent2269Component;
  let fixture: ComponentFixture<TestComponent2269Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2269Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
