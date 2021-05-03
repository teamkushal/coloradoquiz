import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2657Component } from './test-component2657.component';

describe('TestComponent2657Component', () => {
  let component: TestComponent2657Component;
  let fixture: ComponentFixture<TestComponent2657Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2657Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
