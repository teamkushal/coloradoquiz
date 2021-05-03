import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2660Component } from './test-component2660.component';

describe('TestComponent2660Component', () => {
  let component: TestComponent2660Component;
  let fixture: ComponentFixture<TestComponent2660Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2660Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
