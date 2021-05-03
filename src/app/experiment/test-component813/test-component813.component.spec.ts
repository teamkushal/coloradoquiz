import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent813Component } from './test-component813.component';

describe('TestComponent813Component', () => {
  let component: TestComponent813Component;
  let fixture: ComponentFixture<TestComponent813Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent813Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
