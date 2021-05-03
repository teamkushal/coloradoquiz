import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent670Component } from './test-component670.component';

describe('TestComponent670Component', () => {
  let component: TestComponent670Component;
  let fixture: ComponentFixture<TestComponent670Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent670Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent670Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
