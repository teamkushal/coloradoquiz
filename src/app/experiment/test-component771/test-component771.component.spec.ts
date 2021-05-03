import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent771Component } from './test-component771.component';

describe('TestComponent771Component', () => {
  let component: TestComponent771Component;
  let fixture: ComponentFixture<TestComponent771Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent771Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
