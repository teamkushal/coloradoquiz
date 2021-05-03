import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent834Component } from './test-component834.component';

describe('TestComponent834Component', () => {
  let component: TestComponent834Component;
  let fixture: ComponentFixture<TestComponent834Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent834Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
