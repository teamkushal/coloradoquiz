import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2331Component } from './test-component2331.component';

describe('TestComponent2331Component', () => {
  let component: TestComponent2331Component;
  let fixture: ComponentFixture<TestComponent2331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2331Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
