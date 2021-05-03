import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent586Component } from './test-component586.component';

describe('TestComponent586Component', () => {
  let component: TestComponent586Component;
  let fixture: ComponentFixture<TestComponent586Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent586Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
