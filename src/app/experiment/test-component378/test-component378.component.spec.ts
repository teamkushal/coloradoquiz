import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent378Component } from './test-component378.component';

describe('TestComponent378Component', () => {
  let component: TestComponent378Component;
  let fixture: ComponentFixture<TestComponent378Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent378Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
