import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2194Component } from './test-component2194.component';

describe('TestComponent2194Component', () => {
  let component: TestComponent2194Component;
  let fixture: ComponentFixture<TestComponent2194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2194Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
