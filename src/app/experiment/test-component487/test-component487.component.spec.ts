import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent487Component } from './test-component487.component';

describe('TestComponent487Component', () => {
  let component: TestComponent487Component;
  let fixture: ComponentFixture<TestComponent487Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent487Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
