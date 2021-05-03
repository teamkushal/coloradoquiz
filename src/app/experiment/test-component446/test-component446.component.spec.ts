import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent446Component } from './test-component446.component';

describe('TestComponent446Component', () => {
  let component: TestComponent446Component;
  let fixture: ComponentFixture<TestComponent446Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent446Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
