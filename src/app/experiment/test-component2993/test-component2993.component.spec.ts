import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2993Component } from './test-component2993.component';

describe('TestComponent2993Component', () => {
  let component: TestComponent2993Component;
  let fixture: ComponentFixture<TestComponent2993Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2993Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
