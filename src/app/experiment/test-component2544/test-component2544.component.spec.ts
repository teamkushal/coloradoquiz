import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2544Component } from './test-component2544.component';

describe('TestComponent2544Component', () => {
  let component: TestComponent2544Component;
  let fixture: ComponentFixture<TestComponent2544Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2544Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2544Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
