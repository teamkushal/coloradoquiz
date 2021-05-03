import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent94Component } from './test-component94.component';

describe('TestComponent94Component', () => {
  let component: TestComponent94Component;
  let fixture: ComponentFixture<TestComponent94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent94Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
