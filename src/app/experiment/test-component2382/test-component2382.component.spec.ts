import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2382Component } from './test-component2382.component';

describe('TestComponent2382Component', () => {
  let component: TestComponent2382Component;
  let fixture: ComponentFixture<TestComponent2382Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2382Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
