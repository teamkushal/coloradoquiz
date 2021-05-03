import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent383Component } from './test-component383.component';

describe('TestComponent383Component', () => {
  let component: TestComponent383Component;
  let fixture: ComponentFixture<TestComponent383Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent383Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
