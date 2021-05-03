import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent17Component } from './test-component17.component';

describe('TestComponent17Component', () => {
  let component: TestComponent17Component;
  let fixture: ComponentFixture<TestComponent17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
