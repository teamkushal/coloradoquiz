import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent915Component } from './test-component915.component';

describe('TestComponent915Component', () => {
  let component: TestComponent915Component;
  let fixture: ComponentFixture<TestComponent915Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent915Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent915Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
