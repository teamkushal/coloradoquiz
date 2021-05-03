import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent202Component } from './test-component202.component';

describe('TestComponent202Component', () => {
  let component: TestComponent202Component;
  let fixture: ComponentFixture<TestComponent202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
