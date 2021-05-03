import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent585Component } from './test-component585.component';

describe('TestComponent585Component', () => {
  let component: TestComponent585Component;
  let fixture: ComponentFixture<TestComponent585Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent585Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
