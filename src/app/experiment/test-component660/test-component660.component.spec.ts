import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent660Component } from './test-component660.component';

describe('TestComponent660Component', () => {
  let component: TestComponent660Component;
  let fixture: ComponentFixture<TestComponent660Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent660Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
