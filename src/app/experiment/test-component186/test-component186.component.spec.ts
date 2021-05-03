import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent186Component } from './test-component186.component';

describe('TestComponent186Component', () => {
  let component: TestComponent186Component;
  let fixture: ComponentFixture<TestComponent186Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent186Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
