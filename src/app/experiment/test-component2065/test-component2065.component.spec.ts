import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2065Component } from './test-component2065.component';

describe('TestComponent2065Component', () => {
  let component: TestComponent2065Component;
  let fixture: ComponentFixture<TestComponent2065Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2065Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2065Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
