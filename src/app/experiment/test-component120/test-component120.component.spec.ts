import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent120Component } from './test-component120.component';

describe('TestComponent120Component', () => {
  let component: TestComponent120Component;
  let fixture: ComponentFixture<TestComponent120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
