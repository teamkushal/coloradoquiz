import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent72Component } from './test-component72.component';

describe('TestComponent72Component', () => {
  let component: TestComponent72Component;
  let fixture: ComponentFixture<TestComponent72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
