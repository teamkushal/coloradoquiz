import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2679Component } from './test-component2679.component';

describe('TestComponent2679Component', () => {
  let component: TestComponent2679Component;
  let fixture: ComponentFixture<TestComponent2679Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2679Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
