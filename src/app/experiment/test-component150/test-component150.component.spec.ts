import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent150Component } from './test-component150.component';

describe('TestComponent150Component', () => {
  let component: TestComponent150Component;
  let fixture: ComponentFixture<TestComponent150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
