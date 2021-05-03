import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2959Component } from './test-component2959.component';

describe('TestComponent2959Component', () => {
  let component: TestComponent2959Component;
  let fixture: ComponentFixture<TestComponent2959Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2959Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
