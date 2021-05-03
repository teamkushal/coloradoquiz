import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent617Component } from './test-component617.component';

describe('TestComponent617Component', () => {
  let component: TestComponent617Component;
  let fixture: ComponentFixture<TestComponent617Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent617Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent617Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
