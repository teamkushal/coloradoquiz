import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2663Component } from './test-component2663.component';

describe('TestComponent2663Component', () => {
  let component: TestComponent2663Component;
  let fixture: ComponentFixture<TestComponent2663Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2663Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
