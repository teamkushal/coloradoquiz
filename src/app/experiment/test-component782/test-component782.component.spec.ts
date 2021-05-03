import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent782Component } from './test-component782.component';

describe('TestComponent782Component', () => {
  let component: TestComponent782Component;
  let fixture: ComponentFixture<TestComponent782Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent782Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
